/* eslint-disable import/no-dynamic-require */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import {
  Container,
  ContentGridWrapper,
  Header,
  ContentWrapper,
} from './styles';

const GuidePage = () => {
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState('');

  const { id } = useParams();

  useEffect(() => {
    try {
      const markdownFile = require(`../../assets/guides/${id}.md`);

      fetch(markdownFile)
        .then((resp) => {
          return resp.text();
        })
        .then((text) => setMarkdown(text));
    } catch (e) {
      if (e) {
        setError('O guia procurado não existe');
      }
    }
  }, [id]);

  return (
    <Container>
      <ContentGridWrapper>
        <Header />
        <ContentWrapper>
          {error ? <h1>{error}</h1> : <ReactMarkdown source={markdown} />}
        </ContentWrapper>
      </ContentGridWrapper>
    </Container>
  );
};

export default GuidePage;
