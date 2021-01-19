import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

const NewUserForm = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.container}
    >
      <Typography
        variant="h1"
        color="initial"
        align="center"
        style={{ fontSize: 40 }}
      >
        New User
      </Typography>
    </Grid>
  );
};

export default NewUserForm;
