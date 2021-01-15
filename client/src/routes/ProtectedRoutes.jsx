import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

import { signin } from './routes.json';

const ProtectedRoutes = (props) => {
  const { path, Component } = props;
  const [tokenValidated, setTokenValidated] = useState(true);

  const validateToken = async () => {
    const keyValue = localStorage.getItem('token');
    console.log(keyValue);
    if (!keyValue) {
      setTokenValidated(false);
    }

    try {
      await axios.post('localhost:9000/auth/validate-token', {
        token: keyValue,
      });
    } catch (error) {
      const { message } = error;
      console.log({ message });
    }

    /*
    try {
      await Axios.post('localhost:9000/auth/validate-token', {
        token: keyValue,
      });
    } catch (error) {
      const { message } = error;
      console.log({ message });
    } */
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
