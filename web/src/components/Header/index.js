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

import { Types as UserData } from '~/store/ducks/userData';

const Header = () => {
  const dispath = useDispatch();
  const { userData } = useSelector((state) => state);

  const name = localStorage.getItem('USER_NAME');
  const token = localStorage.getItem('TOKEN_KEY');

  useEffect(() => {
    if (name && token) {
      dispath({
        type: UserData.INSERT_DATA,
        payload: { name, token },
      });
    }
  }, []);

  const logout = () => {
    dispath({
      type: UserData.CLEAR_DATA,
    });

    localStorage.removeItem('TOKEN_KEY');
    localStorage.removeItem('USER_NAME');
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
            <NavLink to="/user_page">{userData.name}</NavLink>
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
