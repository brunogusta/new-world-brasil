/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment';

import {
  Container,
  ContentGridWrapper,
  SiteInformationsWrapper,
  LivesContentWrapper,
  SideContentWrapper,
  NoCompanyText,
  PremiumCompanies,
  SocialNetwordWrapper,
  DiscordButton,
  SocialButtonsWrapper,
  FeedContentWrapper,
  CardWrapper,
  CardHeader,
  CompanyName,
  CardFooter,
  InfoWrapper,
  CardLiveWrapper,
  LivesHeaderText,
  FeedBar,
  PostWrapper,
  PostHeader,
  TitlePostWrapper,
  PostContentWrapper,
  PostDate,
  Content,
  Footer,
} from './styles';

import bar from '~/assets/images/bar.png';
import cardBackground from '~/assets/images/company-art.png';
import arrowLeft from '~/assets/images/arrow-left.png';
import arrowRight from '~/assets/images/arrow-right.png';
import instagram from '~/assets/images/instagram.png';
import youtube from '~/assets/images/youtube.png';
import twitter from '~/assets/images/twitter.png';
import facebook from '~/assets/images/facebook.png';

import api from '~/services/api';
import Pagination from '~/components/Pagination';
import LoadingAnimation from '~/utils/animation/LoadingAnimation';

const Home = () => {
  const [totalMembers, setTotalMembers] = useState(null);
  const [totalCompanies, setTotalCompanies] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [companies, setCompanies] = useState(null);
  const [posts, setPosts] = useState(null);
  const [liveCards] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await api
        .get('/companies/total')
        .then(({ data }) => {
          setTotalMembers(data.totalMembers);
          setTotalCompanies(data.totalCompanies);
        })
        .catch((e) => console.log(e));
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await api
        .get('/companies/supporters')
        .then(({ data }) => {
          console.log(data);
          if (data) {
            setCompanies(data);
          }
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
          if (e.response && e.response.data.error) {
            toast.error(`${e.response.data.error}`, {
              position: toast.POSITION.TOP_CENTER,
              draggable: false,
              autoClose: 8000,
              className: 'custom-toast',
            });
          } else {
            toast.error('Erro inesperado ao carregar a lista de companhias', {
              position: toast.POSITION.TOP_CENTER,
              draggable: false,
              autoClose: 8000,
              className: 'custom-toast',
            });
          }
        });
    }

    fetchData();
    setLoading(true);
  }, []);

  const params = new URL(document.location).searchParams;
  let page = params.get('page');
  if (!page) page = 1;
  useEffect(() => {
    async function fetchData() {
      await api
        .get(`/post/load-posts/?page=${page}`)
        .then(({ data }) => {
          setPosts(data.posts);
          setTotalPages(data.totalPages);
        })
        .catch((e) => {
          if (e.response.data && e.response.data.error) {
            toast.error(`${e.response.data.error}`, {
              position: toast.POSITION.TOP_CENTER,
              draggable: false,
              autoClose: 8000,
              className: 'custom-toast',
            });
          }
        });
    }

    fetchData();
  }, []);

  const createCarouselItemCard = (index) => {
    return (
      <CardLiveWrapper key={index}>
        <a
          href="https://www.youtube.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={cardBackground} alt="card" />
        </a>
      </CardLiveWrapper>
    );
  };

  const baseChildren = <div>{liveCards.map(createCarouselItemCard)}</div>;

  // eslint-disable-next-line no-restricted-globals
  const screenWidth = screen.width;
  const getConfigurableProps = () => ({
    showArrows: liveCards.length > 3,
    interval: 2000,
    infiniteLoop: liveCards.length > 3,
    autoPlay: liveCards.length > 3,
    showIndicators: false,
    stopOnHover: true,
    showStatus: false,
    showThumbs: false,
    centerMode: screenWidth < '750' ? false : true,
    swipeable: false,
    centerSlidePercentage: liveCards.length === 3 ? 30 : 33,
  });

  return (
    <Container>
      <ToastContainer />
      <ContentGridWrapper>
        <SiteInformationsWrapper>
          <div className="wrapper">
            <span className="logo">
              <i className="fab fa-acquisitions-incorporated" />
              CENTRAL NWBR
            </span>
            <div>
              <span>
                <i className="fas fa-users" />
                {totalMembers} {totalMembers > 1 ? 'MEMBROS' : 'MEMBRO'}
              </span>
              <span> | </span>
              <span>
                <i className="fas fa-home" />
                {totalCompanies}
                {totalCompanies > 1 ? ' COMPANHIAS' : ' COMPANHIA'}
              </span>
            </div>
          </div>
        </SiteInformationsWrapper>
        <LivesContentWrapper>
          <LivesHeaderText>
            <h1>LIVES DE NEW WORLD</h1>
          </LivesHeaderText>
          <Carousel
            {...getConfigurableProps()}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    border: 'none',
                    left: -30,
                    top: 0,
                    bottom: 0,
                    zIndex: 10,
                  }}
                >
                  <img
                    src={arrowLeft}
                    alt="arrow-left"
                    style={{
                      maxWidth: '40px',
                      height: 'auto',
                      position: 'relative',
                    }}
                  />
                </button>
              )}
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    border: 'none',
                    bottom: 0,
                    top: 0,
                    right: -30,
                    zIndex: 10,
                  }}
                >
                  <img
                    src={arrowRight}
                    alt="arrow-left"
                    style={{
                      maxWidth: '40px',
                      height: 'auto',
                      position: 'relative',
                    }}
                  />
                </button>
              )}
          >
            {baseChildren.props.children}
          </Carousel>
        </LivesContentWrapper>
        <SideContentWrapper>
          <PremiumCompanies>
            <span>
              <h1>
                COMPANHIAS <i className="fas fa-star" />
              </h1>
            </span>
            <div className="companies-list">
              {companies ? (
                companies.map(({ _companyId }) => {
                  return (
                    <CardWrapper
                      href={`http://localhost:3000/companies/find-one/${_companyId._id}`}
                      target="_blank"
                    >
                      <img
                        className="background-company"
                        src={cardBackground}
                        alt="background-company"
                      />
                      <CardHeader>
                        <p>COMPANHIA</p>
                        <i className="fas fa-star" />
                      </CardHeader>
                      <CompanyName>
                        <h1>{_companyId.title}</h1>
                        <img src={bar} alt="bar" />
                      </CompanyName>
                      <CardFooter>
                        <InfoWrapper>
                          <p className="info-name">FACÇÃO</p>
                          <p>{_companyId.faction}</p>
                        </InfoWrapper>
                        <InfoWrapper>
                          <p className="info-name">MEMBROS</p>
                          <p>{_companyId.size}</p>
                        </InfoWrapper>
                        <InfoWrapper>
                          <p className="info-name">RECRUTANDO</p>
                          <p>{_companyId.recruting ? 'SIM' : 'NÃO'}</p>
                        </InfoWrapper>
                      </CardFooter>
                    </CardWrapper>
                  );
                })
              ) : loading ? (
                <LoadingAnimation />
              ) : (
                <NoCompanyText>
                  <h1>Não há companhias em destaque.</h1>{' '}
                </NoCompanyText>
              )}
            </div>
          </PremiumCompanies>
          <div className="bar-division">
            <img src={bar} alt="bar" />
          </div>
          <SocialNetwordWrapper>
            <p className="discord-button-label">COMUNIDADE NEW WORLD BRASIL</p>
            <DiscordButton>
              <a
                href="https://discord.gg/hh6Jbzk"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="btn-content">
                  <i className="fab fa-discord" />
                  <div>
                    <p>Link direto para o</p>
                    <h1>DISCORD</h1>
                  </div>
                </div>
              </a>
            </DiscordButton>
            <SocialButtonsWrapper>
              <a href="#">
                <img src={facebook} alt="facebook-icon" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram-icon" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter-icon" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube-icon" />
              </a>
            </SocialButtonsWrapper>
          </SocialNetwordWrapper>
          <div className="bar-division">
            <img src={bar} alt="bar" />
          </div>
        </SideContentWrapper>
        <FeedBar>
          <div>
            <h1>FEED NWBR</h1>
          </div>
        </FeedBar>
        <FeedContentWrapper>
          {posts ? (
            posts.map((post) => {
              return (
                <PostWrapper>
                  <PostHeader>
                    <TitlePostWrapper>
                      <h1>{post.title}</h1>
                    </TitlePostWrapper>
                    <img src={post.imageUrl} alt={post.imageName} />
                  </PostHeader>
                  <PostContentWrapper>
                    <PostDate>
                      <h1>
                        {moment(post.createdAt)
                          .locale('pt-br')
                          .format('DD/MM/YYYY')}
                      </h1>
                    </PostDate>
                    <Content
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    />
                    <div className="end-bar">
                      <img src={bar} alt="end-bar" />
                    </div>
                  </PostContentWrapper>
                </PostWrapper>
              );
            })
          ) : (
            <LoadingAnimation />
          )}
        </FeedContentWrapper>
        <Footer>
          <Pagination
            total={totalPages}
            activePage={Number(page)}
            pageLink="http://localhost:3000/?page=%page%"
          />
        </Footer>
      </ContentGridWrapper>
    </Container>
  );
};

export default Home;
