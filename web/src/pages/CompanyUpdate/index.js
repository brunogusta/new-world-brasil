import React from 'react';
import { useSelector } from 'react-redux';
import CreateCompanyForm from '~/components/CreateCompanyForm';

import { Container } from './styles';

const CompanyUpdate = () => {
  const { userCompanyStatus } = useSelector((state) => state);

  return (
    <Container>
      {userCompanyStatus.success ? (
        <>
          <h1>companhia atualizada com sucesso!</h1>
          <a
            href={`http://localhost:3000/companies/find-one/?id=${userCompanyStatus._id}`}
          >
            Ir para a página
          </a>
        </>
      ) : (
        <CreateCompanyForm header="Atualizar Companhia" />
      )}
    </Container>
  );
};

export default CompanyUpdate;
