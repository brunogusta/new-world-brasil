/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';
import * as Yup from 'yup';
import api from '~/services/api';

import {
  Container,
  Header,
  ContentWrapper,
  ContentGridWrapper,
  ContentHeader,
  ContentUserInfo,
  ContentUserInfoHeader,
  ContentuserInfoBox,
  InputWrapper,
  SelectInputsWrapper,
  SelectInputBox,
  SubmitButton,
  ContentliveInfo,
  ContentCompanyInfo,
  ContentHeaderPlayerName,
  ContentHeaderPlayerStatus,
  ContentLiveInfoHeader,
  ContentCompanyInfoHeader,
  CompanyImageWrapper,
  ContentCompanyInfoBox,
  CompanyBtnLinksWrapper,
  NoHaveCompanyWrapper,
  ContentLiveInfoBox,
  PreviewImageThumbWrapper,
  SwitchLiveOnWrapper,
  LinkButton,
  RegisterCompanyBtn,
  TextError,
  LiveWarning,
} from './styles';

import bar from '~/assets/images/bar.png';
import DefaultImage from '~/assets/images/default-logo.jpg';
import LoadingAnimation from '~/utils/animation/LoadingAnimation/';
import SwitchButton from '~/components/SwitchButton';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [liveData, setLiveData] = useState(null);
  const [imageError, setImageError] = useState('');
  const [imageValid, setImageValid] = useState(true);
  const [image, setImage] = useState(null);
  const [previewImageURL, setPreviewImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [liveLoading, setLiveLoading] = useState(false);
  const [refreshStatus, setRefreshStatus] = useState(false);

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
    async function fetchData() {
      const { data } = await api.get('/user/find-one');
      return data;
    }

    fetchData()
      .then((data) => {
        setUserData(data);
        console.log(data);
        if (data && data._companyId) {
          setCompanyData(data._companyId);
        }
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
          autoClose: 8000,
          className: 'custom-toast',
        });
      });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/live/live-info');
      return data;
    }

    fetchData()
      .then((data) => {
        if (data.liveData) {
          setLiveData(data.liveData);
          setPreviewImageURL(data.liveData.imageUrl);
        }
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
          autoClose: 8000,
          className: 'custom-toast',
        });
      });
  }, [refreshStatus]);

  const handleSubmitUserValues = async (values) => {
    setLoading(true);

    await api
      .post('/user/save-user-info', { values })
      .then(() => {
        setLoading(false);
        return toast.success(
          'Seus dados de usuário foram salvos com sucesso!',
          {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
            autoClose: 8000,
            className: 'custom-toast',
          }
        );
      })
      .catch((err) => {
        setLoading(false);
        toast.error(`${err.response.data.error}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
          autoClose: 8000,
          className: 'custom-toast',
        });
      });
  };

  const handleSubmitLiveValues = async ({ url }) => {
    setLiveLoading(true);
    const formData = new FormData();
    formData.append('file', image);
    formData.append('url', url);

    if (!liveData) {
      await api
        .post('live/create-live-info', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(({ data }) => {
          setLiveData(data);
          setLiveLoading(false);
          return toast.success('Dados da live salvos com sucesso!', {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
            autoClose: 8000,
            className: 'custom-toast',
          });
        })
        .catch((err) => {
          setLiveLoading(false);
          toast.error(`${err.response.data.error}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
            autoClose: 8000,
            className: 'custom-toast',
          });
        });
    } else {
      await api
        .put('live/update-live-info', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(({ data }) => {
          setLiveData(data);
          setLiveLoading(false);
          return toast.success('Dados da live atualizados com sucesso!', {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
            autoClose: 8000,
            className: 'custom-toast',
          });
        })
        .catch((err) => {
          setLiveLoading(false);
          toast.error(`${err.response.data.error}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
            autoClose: 8000,
            className: 'custom-toast',
          });
        });
    }
  };

  return (
    <Container>
      <ToastContainer />
      <ContentGridWrapper>
        <Header />
        <ContentWrapper>
          <ContentHeader>
            <ContentHeaderPlayerName>
              <h1>
                <span>Olá,</span> {userData && userData.name}.
              </h1>
            </ContentHeaderPlayerName>
            <ContentHeaderPlayerStatus
              isSupporter={userData && userData.isSupporter}
            >
              <h1>Status:</h1>
              <h1 className="stats-info">
                Apoiador:{' '}
                <span>
                  {userData && userData.isSupporter ? 'Ativo.' : 'Inativo.'}
                </span>
              </h1>
            </ContentHeaderPlayerStatus>
          </ContentHeader>
          <ContentUserInfo show={!(userData && userData.isSupporter)}>
            <ContentUserInfoHeader>
              <h1>Seus dados</h1>
              <img src={bar} alt="bar" />
            </ContentUserInfoHeader>
            <ContentuserInfoBox>
              <Formik
                enableReinitialize
                initialValues={{
                  nickDiscord:
                    userData && userData.nickDiscord
                      ? userData.nickDiscord
                      : '',
                  nickInGame:
                    userData && userData.nickInGame ? userData.nickInGame : '',
                  lvl: userData && userData.lvl ? userData.lvl : '',
                  especialization:
                    userData && userData.especialization
                      ? userData.especialization
                      : 'N/D',
                  focus: userData && userData.focus ? userData.focus : 'N/D',
                  faction:
                    userData && userData.faction ? userData.faction : 'N/D',
                  findingCompany:
                    userData && userData.findingCompany
                      ? userData.findingCompany
                      : false,
                }}
                onSubmit={(values) => {
                  handleSubmitUserValues(values);
                }}
                validationSchema={Yup.object().shape({
                  lvl: Yup.number()
                    .typeError('Level deve ser um número.')
                    .required('Level é obrigatório.'),
                  nickDiscord: Yup.string().required(
                    'Nome no discord obrigatório.'
                  ),
                  nickInGame: Yup.string().required(
                    'Nome no jogo obrigatório.'
                  ),
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
                    <SelectInputsWrapper>
                      <InputWrapper>
                        <input
                          type="text"
                          name="nickDiscord"
                          placeholder="Title"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.nickDiscord}
                          id="nickDiscord"
                        />
                        <label htmlFor="nickDiscord">NICK NO DISCORD</label>
                        {errors.nickDiscord && touched.nickDiscord && (
                          <TextError>{errors.nickDiscord}</TextError>
                        )}
                      </InputWrapper>
                      <InputWrapper>
                        <input
                          type="text"
                          name="nickInGame"
                          placeholder="Title"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.nickInGame}
                          id="nickInGame"
                        />
                        <label htmlFor="nickInGame">NICK NO JOGO</label>
                        {errors.nickInGame && touched.nickInGame && (
                          <TextError>{errors.nickInGame}</TextError>
                        )}
                      </InputWrapper>
                      <InputWrapper>
                        <input
                          type="text"
                          name="lvl"
                          placeholder="Title"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lvl}
                          id="lvl"
                        />
                        <label htmlFor="lvl">LEVEL</label>
                        {errors.lvl && touched.lvl && (
                          <TextError>{errors.lvl}</TextError>
                        )}
                      </InputWrapper>
                      <SelectInputBox>
                        <label htmlFor="especialization">Especialização</label>
                        <select
                          name="especialization"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.especialization}
                          id="especialization"
                        >
                          <option value="N/D">N/D</option>
                          <option value="DPS">DPS</option>
                          <option value="HEALER">HEALER</option>
                          <option value="TANKER">TANKER</option>
                        </select>
                      </SelectInputBox>
                      <SelectInputBox>
                        <label htmlFor="focus">Foco</label>
                        <select
                          name="focus"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.focus}
                          id="focus"
                        >
                          <option value="N/D">N/D</option>
                          <option value="PVP">PVP</option>
                          <option value="PVE">PVE</option>
                          <option value="PVX">PVX</option>
                        </select>
                      </SelectInputBox>
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
                          <option value="SINDICATO">SINDICATO</option>
                          <option value="SAQUEADORES">SAQUEADORES</option>
                          <option value="ALIANÇA">ALIANÇA</option>
                        </select>
                      </SelectInputBox>
                      <SelectInputBox>
                        <label htmlFor="findingCompany">
                          Procurando Companhia?
                        </label>
                        <select
                          name="findingCompany"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.findingCompany}
                          id="findingCompany"
                        >
                          <option value={false}>Não</option>
                          <option value>Sim</option>
                        </select>
                      </SelectInputBox>
                    </SelectInputsWrapper>
                    <SubmitButton
                      type="submit"
                      disabled={!isValid}
                      onClick={handleSubmit}
                    >
                      {loading ? <LoadingAnimation /> : 'Enviar'}
                    </SubmitButton>
                  </>
                )}
              />
            </ContentuserInfoBox>
            <p className="supporter-text">
              Torne-se um apoiador para ter acesso a benefícios exclusivos no
              site e ajudar a comunidade!
              <span>{/* <Link>Saiba Mais.</Link> */}</span>
            </p>
          </ContentUserInfo>
          <ContentliveInfo isSupporter={userData && userData.isSupporter}>
            <ContentLiveInfoHeader>
              <h1>Está em live? Mostre-a no site!</h1>
              <img src={bar} alt="bar" />
            </ContentLiveInfoHeader>
            <ContentLiveInfoBox>
              <Formik
                enableReinitialize
                initialValues={{
                  url: liveData ? liveData.liveURL : '',
                }}
                onSubmit={(values) => {
                  handleSubmitLiveValues(values);
                }}
                validationSchema={Yup.object().shape({
                  url: Yup.string('Url inválida').required(
                    'A URL da live é obrigatória.'
                  ),
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
                    <SelectInputsWrapper>
                      <PreviewImageThumbWrapper
                        disabled={!(userData && userData.isSupporter)}
                      >
                        <div style={{ position: 'relative' }}>
                          <input
                            disabled={!(userData && userData.isSupporter)}
                            id="select-image"
                            type="file"
                            onChange={(event) => handleImageUpload(event)}
                          />
                          <img
                            src={previewImageURL || DefaultImage}
                            alt="preview"
                          />
                          <p>*150x300/.jpeg</p>
                          {imageError ? (
                            <TextError>{imageError}</TextError>
                          ) : null}
                        </div>
                        <div className="img-label-wrapper">
                          <InputWrapper>
                            <input
                              disabled={!(userData && userData.isSupporter)}
                              type="text"
                              name="url"
                              placeholder="Title"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.url}
                              id="url"
                            />
                            <label htmlFor="url">URL DA LIVE</label>
                            {errors.url && touched.url && (
                              <TextError>{errors.url}</TextError>
                            )}
                          </InputWrapper>
                          <label
                            htmlFor="select-image"
                            disabled={!(userData && userData.isSupporter)}
                          >
                            Selecionar thumb
                          </label>
                        </div>
                      </PreviewImageThumbWrapper>
                    </SelectInputsWrapper>
                    <SubmitButton
                      disabled={
                        !(
                          userData &&
                          userData.isSupporter &&
                          isValid &&
                          imageValid
                        )
                      }
                      type="submit"
                      onClick={handleSubmit}
                    >
                      {liveLoading ? (
                        <LoadingAnimation />
                      ) : liveData ? (
                        'Atualizar dados da live'
                      ) : (
                        'Enviar dados da live'
                      )}
                    </SubmitButton>
                    {liveData || !(userData && userData.isSupporter) ? null : (
                      <LiveWarning>
                        Insira os dados a cima para ativar a sua live no site!
                      </LiveWarning>
                    )}
                    <SwitchLiveOnWrapper
                      switchState={liveData && liveData.isActive}
                      liveData={liveData}
                    >
                      <h1>
                        Mostrar a live ?{' '}
                        <span>
                          *Os dados informados a cima serão expostos na home do
                          site.
                        </span>
                      </h1>
                      <SwitchButton
                        changedStatus={() => setRefreshStatus(!refreshStatus)}
                        disabled={
                          !(liveData && userData && userData.isSupporter)
                        }
                        switchState={liveData && liveData.isActive}
                      />
                    </SwitchLiveOnWrapper>
                  </>
                )}
              />
            </ContentLiveInfoBox>
          </ContentliveInfo>
          <ContentCompanyInfo>
            <ContentCompanyInfoHeader>
              <h1>Companhia cadastrada</h1>
              <img src={bar} alt="bar" />
            </ContentCompanyInfoHeader>
            {companyData ? (
              <ContentCompanyInfoBox>
                <CompanyImageWrapper>
                  <h1>{companyData && companyData.title}</h1>
                  <img
                    src={
                      companyData && companyData.imageUrl
                        ? companyData.imageUrl
                        : DefaultImage
                    }
                    alt="company-logo"
                  />
                </CompanyImageWrapper>
                <CompanyBtnLinksWrapper>
                  <LinkButton
                    to={`/companies/find-one/${companyData && companyData._id}`}
                  >
                    Ver Companhia
                  </LinkButton>
                  <LinkButton to="/registry/company/update">
                    Atualizar Companhia
                  </LinkButton>
                </CompanyBtnLinksWrapper>
              </ContentCompanyInfoBox>
            ) : (
              <NoHaveCompanyWrapper>
                <h1>Você não possuí uma companhia cadastrada!</h1>
                <RegisterCompanyBtn
                  clasName="register-company"
                  to="/registry/company/create-company"
                >
                  CADASTRAR COMPANHIA
                </RegisterCompanyBtn>
              </NoHaveCompanyWrapper>
            )}
          </ContentCompanyInfo>
        </ContentWrapper>
      </ContentGridWrapper>
    </Container>
  );
};

export default UserProfile;
