import React from 'react';
import PropTypes, { number } from 'prop-types';

// import { Container } from './styles';

export const Page = ({ page, pageLink }) => {
  const Component = page === '...' ? 'span' : 'a';
  const href = page === '...' ? null : pageLink;
  return <Component href={href}>{page}</Component>;
};

export default Page;

Page.propTypes = {
  page: PropTypes.objectOf(number).isRequired,
  pageLink: PropTypes.string.isRequired,
};
