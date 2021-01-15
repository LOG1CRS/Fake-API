import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { signin } from './routes.json';

const ProtectedRoutes = (props) => {
  const { path, Component } = props;
  const [tokenValidated, setTokenValidated] = useState(true);
  useEffect(() => {
    const keyValue = localStorage.getItem('token');
    if (!keyValue) {
      setTokenValidated(false);
    }

    console.log(keyValue);
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
