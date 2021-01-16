import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

import { signin } from './routes.json';

const ProtectedRoutes = (props) => {
  const { path, Component } = props;
  const [tokenValidated, setTokenValidated] = useState(true);

  const validateToken = async () => {
    const keyValue = localStorage.getItem('token');

    if (!keyValue) {
      setTokenValidated(false);
      return;
    }

    try {
      await axios.post(
        'http://localhost:9000/auth/validate-token',
        {},
        { headers: { authorization: `Bearer ${keyValue}` } }
      );
    } catch (error) {
      setTokenValidated(false);
      localStorage.removeItem('token');
      const { message } = error;
      console.log({ message });
      return;
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <Route
      path={path}
      exact
      render={() => {
        if (tokenValidated) {
          return <Component />;
        } else {
          return <Redirect to={signin} />;
        }
      }}
    />
  );
};

export default ProtectedRoutes;
