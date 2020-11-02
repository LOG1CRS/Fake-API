import React from 'react';
import { Grid, makeStyles, Hidden, Container } from '@material-ui/core';

import SignUpContainer from './SignUpContainer';
import signUpImage from '../../assets/static/signup-image.jpg';

const useStyle = makeStyles((theme) => ({
  signUp: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  signUpImage: {
    backgroundImage: `url(${signUpImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  },
  signUpSpace: {
    width: '100%',
    height: '100%',
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
      <Grid item xs={12} lg={5} className={classes.signUpSpace}>
        <Container className={classes.signUpSpace}>
          <Grid
            container
            justify="center"
            alignContent="center"
            className={classes.signUpSpace}
          >
            <SignUpContainer />
          </Grid>
        </Container>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={7} className={classes.signUpImage} />
      </Hidden>
    </Grid>
  );
};

export default SignUpMain;
