/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Pagination from './index';

export default { title: 'Pagination' };

export const withoutProps = () => (
  <Pagination
    total={10}
    activePage={5}
    pageLink="http://localhost:3000/companies/?page=%page%"
  />
);
