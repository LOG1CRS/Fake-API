import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  docs: {
    width: '100%',
    height: '100vh',
  },
}));

const DocsMain = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.docs}
    >
      <Typography variant="h1" color="initial" align="center">
        Docs
      </Typography>
    </Grid>
  );
};

export default DocsMain;
