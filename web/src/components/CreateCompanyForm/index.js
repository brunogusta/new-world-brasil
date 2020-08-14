/* eslint-disable no-inner-declarations */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RichTextEditor from 'react-rte';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
  Container,
  FormWrapper,
  FormHeader,
  InputWrapper,
  SubmitButton,
  TextError,
  SectionTitle,
  SelectInputsWrapper,
  SelectInputBox,
  ConsulsWrapper,
  ImageUploadWrapper,
} from './styles';

import DefaultImage from '~/assets/images/default-logo.jpg';
import bar from '~/assets/images/bar.png';
import LoadingAnimation from '~/utils/animation/LoadingAnimation/';
import { Types as companyTypes } from '~/store/ducks/userCompanyStatus';

const CreateCompanyForm = ({ header }) => {
  const [editorState, setEditorState] = useState(
    RichTextEditor.createEmptyValue()
  );
  const [previewImageURL, setPreviewImageURL] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [imageError, setImageError] = useState('');
  const [imageValid, setImageValid] = useState(true);
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(
        '/companies/update/load-company-information'
      );
      return data;
    }

    const currentLocation = window.location.href;
    if (currentLocation === 'http://localhost:3000/registry/company/update') {
      fetchData()
        .then((companyRegistry) => {
          // eslint-disable-next-line no-param-reassign
          companyRegistry.consuls = JSON.parse(companyRegistry.consuls);
          setCompanyData(companyRegistry);
        })
        .catch(() => {
          setError(true);
        });
    }

    return () => {
      setError(false);
    };
  }, []);

  useEffect(() => {
    if (companyData && companyData.imageUrl) {
      setPreviewImageURL(companyData.imageUrl);
    }

    if (companyData && companyData.description) {
      setDescriptionValid(true);
      setEditorState(
        RichTextEditor.createValueFromString(companyData.description, 'html')
      );
    }
  }, [companyData]);

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

    if (textSize < 1500 && textSize > 2) {
      setDescriptionValid(true);
      setDescriptionError('');
    }

    if (textSize > 1500) {
      setDescriptionValid(false);
      setDescriptionError('A descrição ultrapassou o limite.');
    }
  };

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

  const dispatch = useDispatch();
  const handleSubmitValues = async (values) => {
    setLoading(true);
    const {
      title,
      recruting,
      size,
      focus,
      faction,
      governor,
      consulOne,
      consulTwo,
      consulTree,
      discord,
    } = values;
    const consuls = [];

    if (consulOne) {
      consuls.push(consulOne);
    } else {
      consuls.push('N/D');
    }
    if (consulTwo) {
      consuls.push(consulTwo);
    } else {
      consuls.push('N/D');
    }
    if (consulTree) {
      consuls.push(consulTree);
    } else {
      consuls.push('N/D');
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('title', title);
    formData.append('discord', discord);
    formData.append('governor', governor);
    formData.append('faction', faction);
    formData.append('size', size);
    formData.append('focus', focus);
    formData.append('recruting', recruting);
    formData.append('consuls', JSON.stringify(consuls));
    formData.append('description', description);

    if (!companyData) {
      try {
        const resp = await api.post(
          '/registry/companies/create-company',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        const { _id } = resp.data;
        dispatch({
          type: companyTypes.CREATE_SUCCESS,
          payload: { _id },
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        window.scrollTo(0, 0);

        toast.error(`${err.response.data.error}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
          autoClose: 8000,
          className: 'custom-toast',
        });
      }
    } else {
      try {
        const resp = await api.put(
          'registry/companies/update-company',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        const { _id } = resp.data;
        dispatch({
          type: companyTypes.CREATE_SUCCESS,
          payload: { _id },
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
        window.scrollTo(0, 0);

        toast.error(`${err.response.data.error}`, {
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
      {error ? (
        <h1 className="error-message">
          Ops, este usuário não possuí uma companhia cadastrada.
        </h1>
      ) : (
        <FormWrapper>
          <ToastContainer />
          <Formik
            enableReinitialize
            initialValues={{
              title: companyData ? companyData.title : '',
              recruting: companyData ? companyData.recruting : false,
              size: companyData ? companyData.size : '1-10',
              focus: companyData ? companyData.focus : 'PVP',
              faction: companyData ? companyData.faction : 'N/D',
              governor: companyData ? companyData.governor : '',
              consulOne: companyData ? companyData.consuls[0] : '',
              consulTwo: companyData ? companyData.consuls[1] : '',
              consulTree: companyData ? companyData.consuls[2] : '',
              discord: companyData ? companyData.discord : '',
            }}
            onSubmit={(values) => {
              handleSubmitValues(values);
            }}
            validationSchema={Yup.object().shape({
              title: Yup.string()
                .required('Campo obrigatório')
                .max(30, 'Máx.30'),
              governor: Yup.string()
                .required('Campo obrigatório')
                .max(20, 'Máx.20'),
              discord: Yup.string().max(30, 'Discord Inválido'),
              consulOne: Yup.string().max(20, 'Máx.20'),
              consulTwo: Yup.string().max(20, 'Máx.20'),
              consulTree: Yup.string().max(20, 'Máx.20'),
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
              <>
                <FormHeader>
                  <h1>{header}</h1>
                </FormHeader>
                <InputWrapper>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    id="title"
                  />
                  <p>*Máximo de 30 caracteres.</p>
                  <label htmlFor="title">Nome da Companhia</label>
                  {errors.title && touched.title && (
                    <TextError>{errors.title}</TextError>
                  )}
                </InputWrapper>
                <InputWrapper className="governor-wrapper">
                  <input
                    type="text"
                    name="governor"
                    placeholder="Title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.governor}
                    id="governor"
                  />
                  <p>*Máximo de 20 caracteres.</p>
                  <label htmlFor="governor">Governador</label>
                  {errors.governor && touched.governor && (
                    <TextError>{errors.governor}</TextError>
                  )}
                </InputWrapper>
                <InputWrapper className="discord-wrapper">
                  <input
                    type="text"
                    name="discord"
                    placeholder="Discord"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.discord}
                    id="discord"
                  />
                  <label htmlFor="discord">Discord</label>
                  {errors.discord && touched.discord && (
                    <TextError>{errors.discord}</TextError>
                  )}
                </InputWrapper>
                <SelectInputsWrapper>
                  <SelectInputBox>
                    <label htmlFor="faction">Facção</label>
                    <select
                      name="faction"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.faction}
                      id="faction"
                    >
                      <option value="N/D">N/D</option>
                      <option value="saqueadores">Saqueadores</option>
                      <option value="sindicato">Sindicato</option>
                      <option value="aliança">Aliança</option>
                    </select>
                  </SelectInputBox>
                  <SelectInputBox>
                    <label htmlFor="size">Tamanho</label>
                    <select
                      name="size"
                      id="size"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.size}
                    >
                      <option value="1-10">1-10</option>
                      <option value="11-25">11-25</option>
                      <option value="26-50">26-50</option>
                      <option value="51+">51+</option>
                    </select>
                  </SelectInputBox>
                  <SelectInputBox>
                    <label htmlFor="focus">Foco</label>
                    <select
                      name="focus"
                      id="focus"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.focus}
                    >
                      <option value="PVP">PVP</option>
                      <option value="PVE">PVE</option>
                      <option value="PVX">PVX</option>
                    </select>
                  </SelectInputBox>
                  <SelectInputBox>
                    <label htmlFor="recruting">Recrutando</label>
                    <select
                      name="recruting"
                      id="recruting"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.recruting}
                    >
                      <option value={false}>Não</option>
                      <option value>Sim</option>
                    </select>
                  </SelectInputBox>
                </SelectInputsWrapper>
                <SectionTitle className="yui3-cssreset">
                  <h1>Principais Cônsules</h1>
                  <img className="img-consuls" src={bar} alt="bar" />
                </SectionTitle>
                <ConsulsWrapper>
                  <InputWrapper>
                    <input
                      type="text"
                      name="consulOne"
                      placeholder="ConsulOne"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.consulOne}
                      id="consulOne"
                    />
                    <label htmlFor="consulOne">Primeiro</label>
                    <p>*Máximo de 20 caracteres.</p>
                    {errors.consulOne && touched.consulOne && (
                      <TextError>{errors.consulOne}</TextError>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <input
                      type="text"
                      name="consulTwo"
                      placeholder="ConsulTwo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.consulTwo}
                      id="consulTwo"
                    />
                    <label htmlFor="consulTwo">Segundo</label>
                    <p>*Máximo de 20 caracteres.</p>
                    {errors.consulTwo && touched.consulTwo && (
                      <TextError>{errors.consulTwo}</TextError>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <input
                      type="text"
                      name="consulTree"
                      placeholder="ConsulTree"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.consulTree}
                      id="consulTree"
                    />
                    <label htmlFor="consulTree">Terceiro</label>
                    <p>*Máximo de 20 caracteres.</p>
                    {errors.consulTree && touched.consulTree && (
                      <TextError>{errors.consulTree}</TextError>
                    )}
                  </InputWrapper>
                </ConsulsWrapper>
                <SectionTitle className="yui3-cssreset">
                  <h1>Logo da Companhia</h1>
                  <img className="img-logo" src={bar} alt="bar" />
                </SectionTitle>
                <ImageUploadWrapper>
                  <div style={{ position: 'relative' }}>
                    <input
                      id="select-image"
                      type="file"
                      onChange={(event) => handleImageUpload(event)}
                    />
                    <img src={previewImageURL || DefaultImage} alt="preview" />
                    <p>*200x200/.jpeg</p>
                    {imageError ? <TextError>{imageError}</TextError> : null}
                  </div>
                  <label htmlFor="select-image">Selecionar um arquivo</label>
                </ImageUploadWrapper>
                <SectionTitle className="yui3-cssreset">
                  <h1>Descrição da Companhia</h1>
                  <img className="img-description" src={bar} alt="bar" />
                </SectionTitle>
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
                  {loading ? <LoadingAnimation /> : 'Enviar'}
                </SubmitButton>
              </>
            )}
          />
        </FormWrapper>
      )}
    </Container>
  );
};

CreateCompanyForm.propTypes = {
  header: PropTypes.string.isRequired,
};

export default CreateCompanyForm;
