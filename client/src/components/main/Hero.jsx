import React from 'react';
import { Grid, makeStyles, Typography, Container } from '@material-ui/core';

import BGVideo from '../../assets/static/BGVideo.mp4';

const useStyle = makeStyles((theme) => ({
  hero: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: theme.palette.secondary.main,
  },
  videoContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    objectFit: 'cover',
    zIndex: 0,
  },
  bgVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heroContent: {
    zIndex: 1,
  },
}));

const Hero = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.hero}>
      <video
        autoPlay
        muted
        loop
        id="BGVideo"
        className={classes.videoContainer}
      >
        <source src={BGVideo} className={classes.bgVideo} />
      </video>
      <Grid
        container
        alignContent="center"
        justify="center"
        className={classes.heroContent}
      >
        <Container>
          <Typography variant="h1" color="textSecondary">
            Hello World with Fake API!
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Hero;
