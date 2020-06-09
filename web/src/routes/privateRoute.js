import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

import api from '~/services/api';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await api
        .get('/auth/admin-validation')
        .then(() => {
          setIsAdmin(true);
          setIsFetching(false);
        })
        .catch(() => {
          setIsFetching(false);
          setIsAdmin(false);
        });
    }

    fetchData();
  }, []);

  console.log(isAdmin);
  return (
    <Route
      {...rest}
      render={(props) => {
        const success = <Component {...props} />;

        const error = (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );

        if (isFetching) {
          return null;
        }

        return isAdmin ? success : error;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

PrivateRoute.defaultProps = {
  location: {
    pathname: '',
  },
};

export default withRouter(PrivateRoute);
