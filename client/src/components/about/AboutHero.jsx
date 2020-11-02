import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  aboutHero: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

const AboutHero = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.aboutHero}
    >
      <Typography variant="h1" color="initial" align="center">
        About Us
      </Typography>
    </Grid>
  );
};

export default AboutHero;
