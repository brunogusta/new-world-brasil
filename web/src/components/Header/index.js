import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '~/routes/history';

import {
  Container,
  CentralizerContainer,
  LogoWrapper,
  Logo,
  NavLink,
  AuthNavLinksWrapper,
  MiddleNavLinksWrapper,
  LogOutBtn,
  NavLinkRegister,
  MobileMenuWrapper,
  MobileNavWrapper,
  MobileNavLink,
  MobileWrapperHeader,
  MobileWrapperFooter,
  MobileOpenBtn,
  MobileCloseBtn,
  MobileAuthNavLinksWrapper,
  MobileMiddleNavLinksWrapper,
  MobileLogOutBtn,
  MobileNavLinkRegister,
} from './styles';

import { Types as UserData } from '~/store/ducks/userData';
import logo from '~/assets/images/logo.png';
import bar from '~/assets/images/bar.png';
import logoMin from '~/assets/images/logo-min.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state);

  const name = localStorage.getItem('USER_NAME');
  const token = localStorage.getItem('TOKEN_KEY');

  history.listen(() => {
    setOpen(false);
  });

  useEffect(() => {
    if (name && token) {
      dispatch({
        type: UserData.INSERT_DATA,
        payload: { name, token },
      });
    }
  }, [name, token, dispatch]);

  const logout = () => {
    dispatch({
      type: UserData.CLEAR_DATA,
    });

    localStorage.removeItem('TOKEN_KEY');
    localStorage.removeItem('USER_NAME');
    history.push('/');
  };

  const listener = (event) => {
    if (!node.current || !node.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('locationchange', () => setOpen(false));
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, []);

  return (
    <Container>
      <MobileMenuWrapper>
        <LogoWrapper>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </LogoWrapper>
        <MobileOpenBtn onClick={() => setOpen(!open)}>
          <i className="fas fa-bars" />
        </MobileOpenBtn>
        <MobileNavWrapper open={open} ref={node}>
          <MobileWrapperHeader>
            <img src={logo} alt="logo" />
            <MobileCloseBtn onClick={() => setOpen(!open)}>
              <i className="fas fa-times" />
            </MobileCloseBtn>
          </MobileWrapperHeader>
          <MobileMiddleNavLinksWrapper>
            <MobileNavLink to="/list-guides">Guias</MobileNavLink>
            <MobileNavLink to="/companies/all/1">Companhias</MobileNavLink>
            <MobileNavLink to="/users/all/1">Jogadores</MobileNavLink>
          </MobileMiddleNavLinksWrapper>
          {token ? (
            <MobileAuthNavLinksWrapper>
              <MobileNavLink clasName="user-name" to="/user-profile">
                {userData.name}
              </MobileNavLink>
              <MobileLogOutBtn type="button" onClick={() => logout()}>
                Sair
              </MobileLogOutBtn>
            </MobileAuthNavLinksWrapper>
          ) : (
            <MobileAuthNavLinksWrapper>
              <MobileNavLink to="/auth/signin">Login</MobileNavLink>
              <MobileNavLinkRegister to="/auth/signup">
                Registrar
              </MobileNavLinkRegister>
            </MobileAuthNavLinksWrapper>
          )}
          <MobileWrapperFooter>
            <img src={bar} alt="bar" />
            <img src={logoMin} alt="logo-min" />
          </MobileWrapperFooter>
        </MobileNavWrapper>
      </MobileMenuWrapper>
      <CentralizerContainer>
        <LogoWrapper>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </LogoWrapper>
        <MiddleNavLinksWrapper>
          <NavLink to="/users/all/1">Jogadores</NavLink>
          <NavLink to="/list-guides">Guias</NavLink>
          <NavLink to="/companies/all/1">Companhias</NavLink>
        </MiddleNavLinksWrapper>
        {token ? (
          <AuthNavLinksWrapper>
            <NavLink to="/user-profile">{userData.name}</NavLink>
            <LogOutBtn type="button" onClick={() => logout()}>
              Sair
            </LogOutBtn>
          </AuthNavLinksWrapper>
        ) : (
          <AuthNavLinksWrapper>
            <NavLink to="/auth/signin">Login</NavLink>
            <NavLinkRegister to="/auth/signup">Registrar</NavLinkRegister>
          </AuthNavLinksWrapper>
        )}
      </CentralizerContainer>
    </Container>
  );
};

export default Header;
