import React from 'react';
import { Paper, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  signInContainer: {
    width: 430,
    height: 470,
    borderRadius: 30,
  },
}));

const SignInContainer = () => {
  const classes = useStyle();
  return (
    <Paper elevation={7} className={classes.signInContainer}>
      <Typography variant="h1" color="initial" align="center">
        Sign In
      </Typography>
    </Paper>
  );
};

export default SignInContainer;
