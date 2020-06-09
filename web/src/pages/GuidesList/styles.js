import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '~/assets/images/background.jpg';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background});
`;
export const PresentationText = styled.div`
  margin-top: 5vh;

  h1 {
    color: #fff;
    font-family: 'av-bold';
    font-size: 5rem;

    letter-spacing: 6px;
    color: #ffffff;
    text-shadow: 4px 3px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ListWrapper = styled.div`
  max-height: 73vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px 10px;
  width: 90%;

  ul {
    list-style-type: none;

    li {
      transition: all 0.2s ease-in;
      background-color: #43494c;
      border-radius: 10px;
      margin: 10px;
      height: 100px;
      padding: 20px;

      -webkit-box-shadow: 10px 10px 5px -5px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 5px -5px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 10px 5px -5px rgba(0, 0, 0, 0.75);

      &:hover {
        transform: scale(1.01);
      }

      a {
        text-decoration: none;
      }

      .header {
        position: relative;
        color: #fff;
        font-family: 'av-bold';
        font-size: 1rem;

        p {
          position: absolute;
          right: 0;

          span {
            color: ${({ theme }) => theme.textTertiary};
          }
        }
      }

      .description {
        color: #fff;
        font-family: 'av-bold';
        font-size: 1rem;
      }
    }
  }
`;
