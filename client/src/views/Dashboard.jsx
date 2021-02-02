import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import { newUser } from '../routes/routes.json';
import { Link } from 'react-router-dom';
import UserInputDialog from '../components/dashboard/UserInputDialog';
import NewUserForm from '../components/dashboard/NewUserForm';

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
  const [createNewUser, setCreateNewUser] = useState(false);
  return (
    <>
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
            <Button
              startIcon={<PersonAdd />}
              color="primary"
              variant="contained"
              onClick={() => setCreateNewUser(true)}
            >
              Añadir Usuario
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <UserInputDialog
        open={createNewUser}
        setOpen={setCreateNewUser}
        title="New User"
      >
        <NewUserForm setCreateNewUser={setCreateNewUser} />
      </UserInputDialog>
    </>
  );
};

export default Dashboard;
