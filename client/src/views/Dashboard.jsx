import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  dashboard: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

const Dashboard = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.dashboard}
    >
      <Typography variant="h1" color="initial" align="center">
        Dashboard
      </Typography>
    </Grid>
  );
};

export default Dashboard;
