import React from 'react';

import { Container, ListWrapper, PresentationText, StyledLink } from './styles';

import Pagination from '~/components/Pagination';
import GuidesInfo from '~/assets/guides/index';

const params = new URL(document.location).searchParams;
let page = params.get('page');
if (!page) page = 1;

let skipPages = 0;
let totalPages = 1;

if (Number(page) !== 1) {
  skipPages = (page - 1) * 5;
}

const totalGuides = GuidesInfo.length;

if (totalGuides > 5) {
  totalPages = Math.ceil(totalGuides / 5);
}

const limitedArray = GuidesInfo.slice(skipPages, skipPages + 5);

const GuidesList = () => {
  return (
    <Container>
      <PresentationText>
        <h1>Guias</h1>
      </PresentationText>
      <ListWrapper>
        <ul>
          {limitedArray.map((guide) => (
            <StyledLink to={`/guide/${guide.mdName}`}>
              <li>
                <div className="header">
                  <p>
                    Tempo de leitura: <span>{guide.minsRead}.</span>
                  </p>
                  <h1>{guide.title}</h1>
                </div>
                <div className="description">{guide.description}</div>
              </li>
            </StyledLink>
          ))}
        </ul>
      </ListWrapper>
      <Pagination
        total={totalPages}
        activePage={Number(page)}
        pageLink="http://localhost:3000/list-guides/?page=%page%"
      />
    </Container>
  );
};

export default GuidesList;
