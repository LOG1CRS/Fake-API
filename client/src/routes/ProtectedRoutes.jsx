import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { signin } from './routes.json';

const ProtectedRoutes = (props) => {
  const { path, Component } = props;
  useEffect(() => {}, []);
  return (
    <Route
      path={path}
      exact
      render={() => {
        if (localStorage.getItem('token')) {
          return <Component />;
        } else {
          return <Redirect to={signin} />;
        }
      }}
    />
  );
};

export default ProtectedRoutes;
