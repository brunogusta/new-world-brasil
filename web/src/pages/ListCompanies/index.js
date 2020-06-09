/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '~/utils/animation/LoadingAnimation';

import {
  Container,
  SloganWrapper,
  ListCompaniesWrapper,
  CompaniesGrid,
  CardWrapper,
  CardHeader,
  CompanyName,
  CardFooter,
  InfoWrapper,
  Footer,
  LoadingWrapper,
} from './styles';

import bar from '~/assets/images/bar.png';
import api from '~/services/api';
import Pagination from '~/components/Pagination';
import cardBackground from '~/assets/images/company-art.png';

const ListCompanies = () => {
  const [companies, setCompanies] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const { page } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get(`/companies/all/${page}`);

        console.log(data);
        setCompanies(data.companies);
        setTotalPages(data.totalPages);
      } catch (e) {
        if (e.response.data && e.response.data.error) {
          toast.error(`${e.response.data.error}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
            autoClose: 8000,
            className: 'custom-toast',
          });
        }
      }
    }
    fetchData();
  }, [page]);

  return (
    <Container>
      <ToastContainer />
      <SloganWrapper>
        <p className="top-text">CENTRAL DAS</p>
        <p className="middle-text">COMPANHIAS</p>
        <p className="bottom-text">NEW WORLD BRASIL</p>
      </SloganWrapper>
      {companies ? (
        <>
          <ListCompaniesWrapper>
            <CompaniesGrid>
              {companies.map((company) => (
                <CardWrapper
                  href={`http://localhost:3000/companies/find-one/${company._id}`}
                  target="_blank"
                >
                  <img
                    className="background-image"
                    src={cardBackground}
                    alt="background"
                  />
                  <CardHeader>
                    {company._creatorId.isSupporter ? (
                      <i className="fas fa-star" />
                    ) : null}
                  </CardHeader>
                  <CompanyName>
                    <p className="company-field">COMPANHIA</p>
                    <p>{company.title}</p>
                    <img src={bar} alt="bar" />
                  </CompanyName>
                  <CardFooter>
                    <InfoWrapper>
                      <p className="info-name">FACÇÃO</p>
                      <p>{company.faction}</p>
                    </InfoWrapper>
                    <InfoWrapper>
                      <p className="info-name">MEMBROS</p>
                      <p>{company.size}</p>
                    </InfoWrapper>
                    <InfoWrapper>
                      <p className="info-name">RECRUTANDO</p>
                      <p>{company.recruting ? 'SIM' : 'NÃO'}</p>
                    </InfoWrapper>
                  </CardFooter>
                </CardWrapper>
              ))}
            </CompaniesGrid>
          </ListCompaniesWrapper>
          <Footer>
            <Pagination
              total={totalPages}
              activePage={Number(page)}
              pageLink="http://localhost:3000/companies/?page=%page%"
            />
          </Footer>
        </>
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </Container>
  );
};

export default ListCompanies;
