import { expect } from 'chai';
import pagination from './index';

test('pagination should be a function', () => {
  expect(pagination).to.be.a('function');
});
