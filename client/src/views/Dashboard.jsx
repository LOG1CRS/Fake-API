import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Container,
  Hidden,
} from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import UserInputDialog from '../components/dashboard/UserInputDialog';
import NewUserForm from '../components/dashboard/NewUserForm';
import UsersList from '../components/dashboard/UsersList';

const useStyle = makeStyles((theme) => ({
  dashboard: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  title: {
    fontSize: 55,
    [theme.breakpoints.down('lg')]: {
      fontSize: 45,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 40,
      marginTop: 30,
    },
  },
  userList: {
    height: '100%',
    backgroundColor: '#e8e8e8',
    borderRadius: '30px 30px 0 0',
  },
  link: {
    textDecoration: 'none',
  },
  dashboardTitle: {
    height: '25%',
    paddingBottom: 40,
    [theme.breakpoints.only('xs')]: {
      height: '35%',
    },
  },
  dashboardList: {
    height: '75%',
    [theme.breakpoints.only('xs')]: {
      height: '65%',
    },
  },
  addUserButton: {
    [theme.breakpoints.only('xs')]: {
      marginTop: '-30px',
    },
  },
}));

const Dashboard = () => {
  const classes = useStyle();
  const [createNewUser, setCreateNewUser] = useState(false);
  return (
    <>
      <Container className={classes.dashboard}>
        <Grid container style={{ height: '100%' }}>
          <Grid
            container
            justify="center"
            alignItems="flex-end"
            className={classes.dashboardTitle}
          >
            <Grid item xs={12} sm={6}>
              <Hidden only="xs">
                <Typography
                  variant="h1"
                  color="primary"
                  className={classes.title}
                >
                  Your Users
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Typography
                  variant="h1"
                  color="primary"
                  align="center"
                  className={classes.title}
                >
                  Your Users
                </Typography>
              </Hidden>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.addUserButton}>
              <Grid container justify="flex-end">
                <Hidden only="xs">
                  <Button
                    startIcon={<PersonAdd />}
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={() => setCreateNewUser(true)}
                  >
                    Añadir Usuario
                  </Button>
                </Hidden>
                <Hidden smUp>
                  <Button
                    startIcon={<PersonAdd />}
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => setCreateNewUser(true)}
                  >
                    Añadir Usuario
                  </Button>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
          <Grid container style={{ height: '75%' }}>
            <Grid item xs={12} className={classes.userList}>
              <UsersList />
            </Grid>
          </Grid>
        </Grid>
      </Container>
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
