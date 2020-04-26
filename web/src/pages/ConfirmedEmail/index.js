import React, { useEffect, useState } from 'react';

import { Container, TextContainer } from './styles';

import api from '~/services/api';

const ConfirmedEmail = () => {
  const [resp, setResp] = useState('');

  const handleError = (err) => {
    if (err && err.response.data) {
      setResp(err.response.data);
    }
  };

  const handleSuccess = (res) => {
    setResp(res);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const params = new URL(document.location).searchParams;
    const token = params.get('token');

    if (!token) {
      return setResp('Não foi possível confirmar seu email, tente novamente.');
    }

    api
      .get(`auth/confirmed_email/?token=${token}`)
      .then((res) => handleSuccess(res.data))
      .catch((err) => handleError(err));
  }, []);

  return (
    <Container>
      <TextContainer>
        <h1>{resp}</h1>
      </TextContainer>
    </Container>
  );
};

export default ConfirmedEmail;
