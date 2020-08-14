/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable no-inner-declarations */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '~/services/api';

import {
  Container,
  Header,
  ContentGridWrapper,
  SideBar,
  SidebarListWrapper,
  RowWrapper,
  Content,
  InfoGridWrapper,
  InfoFaction,
  InfoMembers,
  InfoFocus,
  InfoRecruting,
  DescriptionWrapper,
  NoDiscordBtn,
  StyledButton,
  ErrorContainer,
  LoadingWrapper,
} from './styles';

import governorImg from '~/assets/images/governor.png';
import consulImg from '~/assets/images/consul.png';
import bar from '~/assets/images/bar.png';
import LoadingAnimation from '~/utils/animation/LoadingAnimation';

const CompanyPage = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await api.get(`companies/find-one/${id}`);
        const consulsArray = JSON.parse(data.consuls);
        data.consuls = consulsArray;
        setCompanyInfo(data);
        setLoading(false);
        return data;
      }

      fetchData();
    } catch (e) {
      setLoading(false);
      return e;
    }
  }, [id]);

  return (
    <Container>
      <Header>
        <h1>COMPANHIA</h1>
      </Header>
      {loading ? (
        <LoadingWrapper>
          <LoadingAnimation />
        </LoadingWrapper>
      ) : companyInfo ? (
        <ContentGridWrapper>
          <SideBar>
            <div>
              <h1 className="companyTitle">{companyInfo.title}</h1>
            </div>
            <img className="logoImg" src={companyInfo.imageUrl} alt="logo" />
            <img className="barImg" src={bar} alt="bar" />
            <SidebarListWrapper>
              <RowWrapper>
                <div>
                  <img src={governorImg} alt="governorImg" />
                </div>
                <div className="textSpam">
                  <p>GOVERNADOR</p>
                  <h1 className="governorName">{companyInfo.governor}</h1>
                </div>
              </RowWrapper>
              {companyInfo.consuls.map((consul) => (
                <RowWrapper>
                  <div className="imageSpam">
                    <img src={consulImg} alt="consulsImg" />
                  </div>
                  <div className="textSpam">
                    <p>CÔNSUL</p>
                    <h1 className="consulName">{consul}</h1>
                  </div>
                </RowWrapper>
              ))}
            </SidebarListWrapper>
          </SideBar>
          <Content>
            <img src={bar} alt="bar" />
            <InfoGridWrapper>
              <InfoFaction>
                <span>
                  <i className="fas fa-home" />
                </span>
                <span>FACÇÃO: {companyInfo.faction}</span>
              </InfoFaction>
              <InfoFocus>
                <span>
                  <i className="fas fa-crosshairs" />
                </span>
                <span>FOCO: {companyInfo.focus}</span>
              </InfoFocus>
              <InfoMembers>
                <span>
                  <i className="fas fa-users" />
                </span>
                <span>MEMBROS: {companyInfo.size}</span>
              </InfoMembers>
              <InfoRecruting>
                <span>
                  <i className="fas fa-clipboard-check" />
                </span>
                <span>RECRUTANDO: {companyInfo.recruting ? 'SIM' : 'NÃO'}</span>
              </InfoRecruting>
            </InfoGridWrapper>
            <img src={bar} alt="bar" />
            <DescriptionWrapper
              dangerouslySetInnerHTML={{ __html: companyInfo.description }}
            />
            {companyInfo.discord ? (
              <StyledButton>
                <a
                  href={companyInfo.discord}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="btn-content">
                    <i className="fab fa-discord" />
                    <p>DISCORD DA COMPANHIA</p>
                  </div>
                </a>
              </StyledButton>
            ) : (
              <NoDiscordBtn disabled="true">
                <div className="btn-content">
                  <i className="fab fa-discord" />
                  <p>DISCORD DA COMPANHIA</p>
                </div>
              </NoDiscordBtn>
            )}
          </Content>
        </ContentGridWrapper>
      ) : (
        <ErrorContainer>
          <h1>Ops, houve um erro inesperado, tente novamente.</h1>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default CompanyPage;
