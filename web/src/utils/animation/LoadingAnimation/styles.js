import styled, { keyframes } from 'styled-components';

const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const ldsEllipsis3 = keyframes`
 0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 30px;

  div {
    position: absolute;
    width: 13px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    background-color: #000;
    left: 8px;
    animation: ${ldsEllipsis1} 0.6s infinite;
  }

  div:nth-child(2) {
    background-color: #000;
    left: 8px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }

  div:nth-child(3) {
    background-color: #000;
    left: 32px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  div:nth-child(4) {
    background-color: #000;
    left: 56px;
    animation: ${ldsEllipsis3} 0.6s infinite;
  }
`;
