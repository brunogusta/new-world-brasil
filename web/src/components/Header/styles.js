import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';
import logo from '~/assets/images/logo.png';

export const Container = styled.nav`
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
  z-index: 2;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  height: auto;
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

  ${media.lessThan('750px')`
   display: none;
  `}
`;

export const MobileMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  height: 100%;

  justify-content: flex-start;
  align-items: center;

  font-size: 1rem;

  ${media.greaterThan('750px')`
   display: none;
  `}
`;

export const MobileNavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  transform: ${({ open }) => (open ? 'translateX(-0%)' : 'translateX(-110%)')};
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  max-width: 60%;

  background-color: #43494c;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;

  -webkit-box-shadow: 5px 5px 15px -1px #000000;
  box-shadow: 5px 5px 15px -1px #000000;

  ${media.greaterThan('750px')`
   display: none;
  `};

  z-index: 15;
`;

export const MobileWrapperHeader = styled.div`
  width: 100%;

  color: #fff;
  background-color: transparent;
  font-size: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: auto;
    max-width: 75%;
  }
`;

export const MobileWrapperFooter = styled.div`
  width: 100%;

  color: #fff;
  background-color: transparent;
  font-size: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img:nth-child(1) {
    margin-bottom: 10px;
    height: 10px;
    max-width: 90%;
  }

  img:nth-child(2) {
    height: auto;
    max-width: 100%;
  }
`;

export const MobileCloseBtn = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 1.8rem;
`;

export const MobileOpenBtn = styled.button`
  color: #fff;
  background-color: #43494c;
  border: none;
  border-radius: 2px;
  padding: 3px 5px 3px 5px;
  font-size: 1.8rem;
  margin-left: 15px;
`;

export const MobileNavLink = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  text-align: left;
  text-transform: uppercase;
  margin: 0.3rem 0;
  text-decoration: none;
`;

export const MobileAuthNavLinksWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MobileLogOutBtn = styled.button`
  font-family: 'av-bold';

  font-size: 1.5rem;
  color: ${({ theme }) => theme.textTertiary};

  background-color: transparent;
  border: none;

  text-transform: uppercase;
`;

export const MobileNavLinkRegister = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textTertiary};
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const MobileMiddleNavLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MiddleNavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthNavLinksWrapper = styled.div`
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
