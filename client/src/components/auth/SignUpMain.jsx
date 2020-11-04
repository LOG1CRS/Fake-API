import React from 'react';
import { Grid, makeStyles, Hidden, Container } from '@material-ui/core';

import SignUpContainer from './SignUpContainer';
import signUpVideo from '../../assets/static/signup-video.mp4';

const useStyle = makeStyles((theme) => ({
  signUp: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  signUpSpace: {
    width: '100%',
    height: '100%',
  },
  videoSpace: {
    backgroundColor: theme.palette.secondary.main,
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    objectFit: 'cover !important',
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
        <Grid item lg={7} className={classes.videoSpace}>
          <video
            autoPlay
            muted
            loop
            id="SUPVideo"
            className={classes.videoContainer}
          >
            <source src={signUpVideo} />
          </video>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default SignUpMain;
