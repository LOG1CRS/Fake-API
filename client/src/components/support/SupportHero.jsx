import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  support: {
    width: '100%',
    height: '100vh',
  },
}));

const SupportHero = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.support}
    >
      <Typography variant="h1" color="initial" align="center">
        Support Us
      </Typography>
    </Grid>
  );
};

export default SupportHero;
