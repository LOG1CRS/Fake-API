import React from 'react';

const RenderIfAuth = (props) => {
  const { children, ifNot } = props;
  const userToken = localStorage.getItem('token');
  return (
    <>
      {ifNot && userToken === null ? children : null}
      {userToken && !ifNot ? children : null}
    </>
  );
};

export default RenderIfAuth;
