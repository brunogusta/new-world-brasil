import React from 'react';
import PropTypes, { number } from 'prop-types';

import { Container } from './styles';

import pagination from '~/utils/pagination';

export default function Pagination({ total, activePage }) {
  return (
    <Container>
      <ul>
        {pagination({ total, activePage }).map((page, i) => (
          <li key={i}>{page}</li>
        ))}
      </ul>
    </Container>
  );
}

Pagination.propTypes = {
  total: PropTypes.objectOf(number).isRequired,
  activePage: PropTypes.objectOf(number).isRequired,
};
