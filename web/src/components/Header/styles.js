import styled from 'styled-components';
import logo from '~/assets/images/logo.png';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  min-height: 5rem;
  min-width: 1300px;
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
`;
