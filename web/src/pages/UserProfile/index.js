/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
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
  LinkButton,
} from './styles';

import bar from '~/assets/images/bar.png';
import DefaultImage from '~/assets/images/default-logo.jpg';
import LoadingAnimation from '~/utils/animation/LoadingAnimation/';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [imageError, setImageError] = useState('');
  const [imageValid, setImageValid] = useState(true);
  const [image, setImage] = useState(null);
  const [previewImageURL, setPreviewImageURL] = useState('');
  const [loading, setLoading] = useState(false);

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

        if (data && data._companyId) {
          setCompanyData(data._companyId);
        }
        console.log(data);
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

  const handleSubmitLiveData = (values) => {
    console.log(values);
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
          <ContentliveInfo>
            <ContentLiveInfoBox>
              <ContentLiveInfoHeader>
                <h1>Está em live? Mostre-a no site!</h1>
                <img src={bar} alt="bar" />
              </ContentLiveInfoHeader>
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
                    href={`http://localhost:3000/companies/find-one/?id=${
                      companyData && companyData._id
                    }`}
                    target="_blank"
                  >
                    Ver Companhia
                  </LinkButton>
                  <LinkButton
                    href="http://localhost:3000/registry/company/update"
                    target="_blank"
                  >
                    Atualizar Companhia
                  </LinkButton>
                </CompanyBtnLinksWrapper>
              </ContentCompanyInfoBox>
            ) : (
              <NoHaveCompanyWrapper>
                <h1>Você não possuí uma companhia cadastrada!</h1>
                <LinkButton href="http://localhost:3000/registry/company/create-company">
                  CADASTRAR COMPANHIA
                </LinkButton>
              </NoHaveCompanyWrapper>
            )}
          </ContentCompanyInfo>
        </ContentWrapper>
      </ContentGridWrapper>
    </Container>
  );
};

export default UserProfile;
