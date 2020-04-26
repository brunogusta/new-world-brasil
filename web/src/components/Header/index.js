import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '~/routes/history';

import {
  Container,
  CentralizerContainer,
  LogoWrapper,
  Logo,
  NavLink,
  NavLinksWrapper,
  LogOutBtn,
  NavLinkRegister,
} from './styles';

import { Types as SignInReducer } from '~/store/ducks/signInReducer';

const Header = () => {
  const dispath = useDispatch();
  const { signInReducer } = useSelector((state) => state);

  const name = localStorage.getItem('USER_NAME');
  const email = localStorage.getItem('USER_EMAIL');
  const token = localStorage.getItem('TOKEN_KEY');

  useEffect(() => {
    if (name && email && token) {
      dispath({
        type: SignInReducer.LOGIN_USER_DATA,
        payload: { name, email, token },
      });
    }
  }, []);

  const logout = () => {
    dispath({
      type: SignInReducer.LOGIN_CLEAR_USER_DATA,
    });

    localStorage.clear();
    history.push('/');
  };

  return (
    <Container>
      <CentralizerContainer>
        <LogoWrapper>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </LogoWrapper>
        {token ? (
          <NavLinksWrapper>
            <NavLink to="/user_page">{signInReducer.username}</NavLink>
            <LogOutBtn type="button" onClick={() => logout()}>
              Sair
            </LogOutBtn>
          </NavLinksWrapper>
        ) : (
          <NavLinksWrapper>
            <NavLink to="/auth/signin">Login</NavLink>
            <NavLinkRegister to="/auth/signup">Registrar</NavLinkRegister>
          </NavLinksWrapper>
        )}
      </CentralizerContainer>
    </Container>
  );
};

export default Header;
