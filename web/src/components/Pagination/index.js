import React from 'react';
import PropTypes, { number } from 'prop-types';

import { Container } from './styles';

import pagination from '~/utils/pagination';
import PageComponent from './components/Page';

export default function Pagination({ total, activePage, pageLink }) {
  return (
    <Container>
      <ul>
        {pagination({ total, activePage }).map((page, i) => (
          <li key={i}>
            <PageComponent
              page={page}
              pageLink={pageLink.replace('%page%', page)}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}

Pagination.propTypes = {
  total: PropTypes.objectOf(number).isRequired,
  activePage: PropTypes.objectOf(number).isRequired,
  pageLink: PropTypes.string.isRequired,
};
