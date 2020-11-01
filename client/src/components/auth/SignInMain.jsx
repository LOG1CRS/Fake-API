import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  signIn: {
    width: '100%',
    height: '100vh',
  },
}));

const SignInMain = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.signIn}
    >
      <Typography variant="h1" color="initial" align="center">
        Sign In
      </Typography>
    </Grid>
  );
};

export default SignInMain;
