import React from 'react';
import { Paper, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  signUpContainer: {
    width: 430,
    height: 470,
    borderRadius: 30,
  },
}));

const SignUpContainer = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.signUpContainer}>
      <Typography variant="h1" color="initial" align="center">
        Sign Up
      </Typography>
    </Paper>
  );
};

export default SignUpContainer;
