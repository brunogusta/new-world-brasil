import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { Container } from './styles';
import api from '~/services/api';

const SwitchButton = ({ disabled, switchState, changedStatus }) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setChecked(switchState);
  }, [switchState]);

  const handleSwitchEvent = async (e) => {
    const switchValue = e.target.checked;
    await api
      .put('/live/live-events', { event: switchValue })
      .then(() => {
        changedStatus();
        setError(false);
        return toast.warn(switchValue ? 'Exibindo a live!' : 'Live Removida!', {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
          autoClose: 8000,
          className: 'custom-toast',
        });
      })
      .catch((err) => {
        setError(true);
        return toast.error(`${err.response.data.error}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
          autoClose: 8000,
          className: 'custom-toast',
        });
      });
    if (!error) setChecked(switchValue);
  };

  return (
    <Container>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onClick={(event) => handleSwitchEvent(event)}
          disabled={disabled}
        />
        <span className="slider round" />
      </label>
    </Container>
  );
};

export default SwitchButton;

SwitchButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  switchState: PropTypes.bool.isRequired,
  changedStatus: PropTypes.func.isRequired,
};
