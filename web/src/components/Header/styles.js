import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.png';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  min-height: 5rem;
  max-width: 1920px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8421569311318278) 11%,
    rgba(0, 0, 0, 0.7553221972382703) 29%,
    rgba(0, 0, 0, 0) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'av-bold';
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  max-width: 100%;
`;

export const LogoWrapper = styled.div`
  width: 30%;
`;

export const CentralizerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  font-size: 1.2rem;
`;

export const AuthNavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MiddleNavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 0.3rem;

  font-family: 'av-bold';
`;

export const NavLinkRegister = styled(Link)`
  text-decoration: none;
  color: #000;
  background-color: #fff;
  padding: 0.2rem;
  margin-left: 1rem;

  border: 2px solid white;
  border-radius: 1rem;
`;

export const LogOutBtn = styled.button`
  background-color: #fff;
  padding: 0 0.5rem;
  font-family: 'av-bold';

  color: #000;

  border-radius: 10px;
  border: none;
  margin-left: 1rem;
  font-size: inherit;
`;
