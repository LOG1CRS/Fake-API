import React, { useState } from 'react';
import {
  Paper,
  makeStyles,
  Typography,
  TextField,
  Grid,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Hidden,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { signup } from '../../routes/routes.json';

const useStyle = makeStyles((theme) => ({
  signInContainer: {
    width: 430,
    height: 470,
    borderRadius: 30,
    marginTop: 50,
    [theme.breakpoints.only('xs')]: {
      marginTop: 30,
      boxShadow: theme.shadows[0],
    },
  },
  signInTitle: {
    marginTop: 32,
    marginBottom: 30,
    fontSize: 51,
  },
  signInInput: {
    marginTop: 12,
    marginBottom: 12,
  },
  signInOptions: {
    fontSize: 15,
    marginTop: 3,
    marginBottom: 3,
  },
  signInOptionsContainer: {
    marginTop: 20,
  },
  link: {
    textDecoration: 'none',
    color: '#709fe1',
  },
  dialogActions: {
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 12,
  },
}));

const SignInContainer = () => {
  const classes = useStyle();

  const [recoverPassword, setRecoverPassword] = useState(false);

  const handleRecoverDialog = () => {
    setRecoverPassword(!recoverPassword);
  };

  const handleRecoverPassword = () => {
    handleRecoverDialog();
  };

  return (
    <>
      <Paper elevation={7} className={classes.signInContainer}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                color="initial"
                align="center"
                className={classes.signInTitle}
              >
                Sign In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                color="primary"
                variant="outlined"
                type="email"
                InputLabelProps={{
                  style: { color: '#000' },
                }}
                fullWidth
                className={classes.signInInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                color="primary"
                variant="outlined"
                type="password"
                InputLabelProps={{
                  style: { color: '#000' },
                }}
                className={classes.signInInput}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className={classes.signInInput}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.signInOptionsContainer}>
              <Typography
                variant="h6"
                color="initial"
                align="center"
                className={classes.signInOptions}
                onClick={handleRecoverDialog}
              >
                Forgot Password?
                <Link to="#" className={classes.link}>
                  {' '}
                  Recover Password
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                color="initial"
                align="center"
                className={classes.signInOptions}
              >
                Don't have an account yet?
                <Link to={signup} className={classes.link}>
                  {' '}
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Dialog
        open={recoverPassword}
        onClose={handleRecoverDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Recover Password</DialogTitle>
        <DialogContent>
          <DialogContentText color="inherit" align="justify">
            To be able to recover your password, please enter your email and you
            will receive an email shortly to be able to change it and access
            your account.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            color="primary"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Grid container>
            <Grid item xs={6}>
              <Button
                onClick={handleRecoverDialog}
                color="secondary"
                variant="outlined"
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="flex-end">
                <Hidden only="xs">
                  <Button
                    onClick={handleRecoverPassword}
                    color="primary"
                    variant="contained"
                  >
                    Recover Password
                  </Button>
                </Hidden>
                <Hidden smUp>
                  <Button
                    onClick={handleRecoverPassword}
                    color="primary"
                    variant="contained"
                  >
                    Recover
                  </Button>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SignInContainer;
