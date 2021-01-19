import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import { newUser } from '../routes/routes.json';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  dashboard: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  link: {
    textDecoration: 'none',
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
      <Grid item>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography
              variant="h1"
              color="initial"
              align="center"
              style={{ fontSize: 40 }}
            >
              Dashboard
            </Typography>
          </Grid>
          <Link to={newUser} className={classes.link}>
            <Button
              startIcon={<PersonAdd />}
              color="primary"
              variant="contained"
            >
              Añadir Usuario
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
