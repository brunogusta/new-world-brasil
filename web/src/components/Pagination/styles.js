import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
    border-radius: 10px;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;

    padding: 10px;
    text-decoration: none;
    font-family: 'av-light';
  }

  li span {
    display: block;
    padding: 10px;
    font-family: 'av-light';
    color: white;
  }

  li a:hover {
    background-color: #111111;
  }
`;
