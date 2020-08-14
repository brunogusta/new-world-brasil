/* eslint-disable camelcase */
import { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import av_bold from '~/assets/fonts/AveriaSerif-Bold.ttf';
import av_bold_i from '~/assets/fonts/AveriaSerif-BoldItalic.ttf';
import av_italic from '~/assets/fonts/AveriaSerif-Italic.ttf';
import av_light from '~/assets/fonts/AveriaSerif-Light.ttf';
import av_light_i from '~/assets/fonts/AveriaSerif-LightItalic.ttf';
import av_regular from '~/assets/fonts/AveriaSerif-Regular.ttf';

export default createGlobalStyle`
 @font-face {
   font-family: 'av-bold';
   src: local('av-bold'), url(${av_bold}) format('truetype');
 }
 @font-face {
   font-family: 'av-bold-i';
   src: local('av-bold-i'), url(${av_bold_i}) format('truetype');
 }
 @font-face {
   font-family: 'av-italic';
   src: local('av-italic'), url(${av_italic}) format('truetype');
 }
 @font-face {
   font-family: 'av-light';
   src: local('av-light'), url(${av_light}) format('truetype');
 }
 @font-face {
   font-family: 'av-light_i';
   src: local('av-light_i'), url(${av_light_i}) format('truetype');
 }
 @font-face {
   font-family: 'av-regular';
   src: local('av-regular'), url(${av_regular}) format('truetype');
 }



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  html, body, #root {
    height: 100%;
    max-width: 1920px;
    background-color: ${({ theme }) => theme.background};
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .custom-toast {
    width:  30vw;
    font-family: 'av-bold';
    font-size:1.2rem;
    text-align: center;
  }

  .Toastify__toast-container--top-center {
    margin-left: calc(-30vw/2)
  }

  .Toastify__toast--warning {
    color: #000;
  }


  ::-webkit-scrollbar {
      width: 10px;
    }

  ::-webkit-scrollbar-track {
    width: 10px;
    background-color: #243035;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6a6e70;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

/*
  ::-webkit-scrollbar  {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  } */


  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      background: transparent !important;
      -webkit-text-fill-color: white !important;
  }
`;
