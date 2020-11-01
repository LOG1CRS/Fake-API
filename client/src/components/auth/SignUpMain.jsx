import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  signUp: {
    width: '100%',
    height: '100vh',
  },
}));

const SignUpMain = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.signUp}
    >
      <Typography variant="h1" color="initial" align="center">
        Sign Up
      </Typography>
    </Grid>
  );
};

export default SignUpMain;
