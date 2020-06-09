import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import RichTextEditor from 'react-rte';
import { ToastContainer, toast } from 'react-toastify';

import {
  Container,
  FormikWrapper,
  FormWrapper,
  SubmitButton,
  TextError,
  InputWrapper,
  ImageUploadWrapper,
} from './styles';

import LoadingAnimation from '~/utils/animation/LoadingAnimation/';
import DefaultImage from '~/assets/images/default-logo.jpg';
import api from '~/services/api';

const NewPost = () => {
  const [editorState, setEditorState] = useState(
    RichTextEditor.createEmptyValue()
  );
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState('');
  const [imageValid, setImageValid] = useState(true);
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [description, setDescription] = useState(null);
  const [descriptionError, setDescriptionError] = useState('');
  const [image, setImage] = useState(null);
  const [previewImageURL, setPreviewImageURL] = useState('');

  const handleImageUpload = (event) => {
    if (event.target.files[0].type !== 'image/jpeg') {
      setImageError('A imagem deve ser .jpeg');
      setImageValid(false);
    } else {
      setImageError('');
      setImageValid(true);
      setImage(event.target.files[0]);
    }

    setPreviewImageURL(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    const html = editorState.toString('html');
    setDescription(html);
  }, [editorState]);

  const handleTextEditor = (value) => {
    setEditorState(value);
    const textSize = value.toString('markdown').length;
    if (textSize <= 2) {
      setDescriptionValid(false);
      setDescriptionError('A descrição é obrigatória');
    }

    if (textSize > 2) {
      setDescriptionError('');
      setDescriptionValid(true);
    }
  };

  const handleSubmitValues = async ({ title }) => {
    setLoading(true);
    const formData = new FormData();

    formData.append('file', image);
    formData.append('title', title);
    formData.append('description', description);

    try {
      await api.post('/post/new-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Post enviado com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
        autoClose: 8000,
        className: 'custom-toast',
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.response.data.error) {
        toast.error(`${err.response.data.error}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
          autoClose: 8000,
          className: 'custom-toast',
        });
      } else {
        setLoading(false);
        toast.error('Houve um erro inesperado, tente novamente', {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
          autoClose: 8000,
          className: 'custom-toast',
        });
      }
    }
  };

  return (
    <Container>
      <ToastContainer />
      <FormikWrapper>
        <h1 className="post-info">NOVO POST</h1>
        <Formik
          initialValues={{
            title: '',
          }}
          onSubmit={(values) => {
            handleSubmitValues(values);
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string().required('O Título é obrigatório'),
          })}
          render={({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
          }) => (
            <FormWrapper>
              <InputWrapper>
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  id="title"
                />
                <label htmlFor="password">Título</label>
                {errors.title && touched.title && (
                  <TextError>{errors.title}</TextError>
                )}
              </InputWrapper>
              <ImageUploadWrapper>
                <div style={{ position: 'relative' }}>
                  <input
                    id="select-image"
                    type="file"
                    onChange={(event) => handleImageUpload(event)}
                  />
                  <img src={previewImageURL || DefaultImage} alt="preview" />
                  <p>*1000px/500px.jpeg</p>
                  {imageError ? <TextError>{imageError}</TextError> : null}
                </div>
                <label htmlFor="select-image">Selecionar um arquivo</label>
              </ImageUploadWrapper>
              <div style={{ position: 'relative' }}>
                <RichTextEditor
                  value={editorState}
                  className="editor-text"
                  onChange={(value) => handleTextEditor(value)}
                />
                <p>*Máximo de 1400 caracteres.</p>
                {descriptionError ? (
                  <TextError>{descriptionError}</TextError>
                ) : null}
              </div>
              <SubmitButton
                type="submit"
                disabled={!(isValid && imageValid && descriptionValid)}
                onClick={handleSubmit}
              >
                {loading ? <LoadingAnimation /> : 'ENVIAR'}
              </SubmitButton>
            </FormWrapper>
          )}
        />
      </FormikWrapper>
    </Container>
  );
};

export default NewPost;
