import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 70px;
  width: 100%;
  background: #43494c;

  h1 {
    font-family: 'av-light';
    color: white;
    font-size: 1rem;
  }

  i {
    margin-right: 10px;
  }

  ${media.lessThan('750px')`
    text-align: center;
  `}
`;
