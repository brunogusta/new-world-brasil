import React from 'react';
import { useSelector } from 'react-redux';
import CreateCompanyForm from '~/components/CreateCompanyForm';

import { Container, SuccessContainer } from './styles';

const CreateCompany = () => {
  const { userCompanyStatus } = useSelector((state) => state);

  return (
    <>
      {userCompanyStatus.success ? (
        <SuccessContainer>
          <h1>companhia criada com sucesso!</h1>
          <a
            href={`http://localhost:3000/companies/find-one/${userCompanyStatus._id}`}
          >
            Ir para a página
          </a>
        </SuccessContainer>
      ) : (
        <Container>
          <CreateCompanyForm header="Registrar Companhia" />
        </Container>
      )}
    </>
  );
};

export default CreateCompany;
