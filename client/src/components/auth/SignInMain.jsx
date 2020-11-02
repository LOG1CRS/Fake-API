import React from 'react';
import { Grid, makeStyles, Container } from '@material-ui/core';

import SignInContainer from './SignInContainer';

const useStyle = makeStyles((theme) => ({
  signIn: {
    width: '100%',
    height: '100vh',
    minHeight: 700,
    backgroundColor: theme.palette.background.default,
  },
  signInSpace: {
    width: '100%',
    height: '100%',
  },
}));

const SignInMain = () => {
  const classes = useStyle();
  return (
    <Container className={classes.signIn}>
      <Grid
        container
        alignContent="center"
        justify="center"
        className={classes.signInSpace}
      >
        <SignInContainer />
      </Grid>
    </Container>
  );
};

export default SignInMain;
