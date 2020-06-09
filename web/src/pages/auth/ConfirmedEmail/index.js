import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, TextContainer } from './styles';

import api from '~/services/api';

const ConfirmedEmail = () => {
  const [resp, setResp] = useState('');

  const handleError = (err) => {
    if (err && err.response.data.error) {
      setResp(err.response.data.error);
    }
  };

  const handleSuccess = (res) => {
    setResp(res);
  };

  const { token } = useParams();
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!token) {
      return setResp('Não foi possível confirmar seu email, tente novamente.');
    }

    api
      .get(`auth/confirmed-email/${token}`)
      .then((res) => handleSuccess(res.data))
      .catch((err) => handleError(err));
  }, [token]);

  return (
    <Container>
      <TextContainer>
        <h1>{resp}</h1>
      </TextContainer>
    </Container>
  );
};

export default ConfirmedEmail;
