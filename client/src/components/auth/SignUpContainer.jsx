import React from 'react';
import {
  Paper,
  makeStyles,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { signin } from '../../routes/routes.json';
import useSignUp from '../../hooks/useSignUp';

const useStyle = makeStyles((theme) => ({
  signUpContainer: {
    width: '100%',
    maxWidth: 500,
    height: 520,
    borderRadius: 30,
    [theme.breakpoints.between('sm', 'md')]: {
      boxShadow: theme.shadows[7],
    },
  },
  signUpTitle: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 55,
  },
  signUpInput: {
    marginTop: 12,
    marginBottom: 12,
  },
  signUpOptions: {
    fontSize: 15,
    marginTop: 3,
    marginBottom: 3,
  },
  signUpOptionsContainer: {
    marginTop: 15,
  },
  link: {
    textDecoration: 'none',
    color: '#709fe1',
    '&:hover': {
      color: '#3a70ba',
    },
  },
  form: {
    width: '100%',
  },
}));

const SignUpContainer = () => {
  const classes = useStyle();

  const [
    handleSubmit,
    setFormName,
    setFormEmail,
    setFormPassword,
    setFormPasswordConfirm,
  ] = useSignUp();

  return (
    <Paper elevation={0} className={classes.signUpContainer}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              color="initial"
              align="center"
              className={classes.signUpTitle}
            >
              Sign Up
            </Typography>
          </Grid>
          <form
            autoComplete="true"
            onSubmit={(e) => handleSubmit(e)}
            className={classes.form}
          >
            <Grid item xs={12}>
              <TextField
                label="Name"
                color="primary"
                variant="outlined"
                onChange={(e) => setFormName(e.target.value)}
                InputLabelProps={{
                  style: { color: '#000' },
                }}
                fullWidth
                className={classes.signUpInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                color="primary"
                variant="outlined"
                onChange={(e) => setFormEmail(e.target.value)}
                InputLabelProps={{
                  style: { color: '#000' },
                }}
                fullWidth
                className={classes.signUpInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                color="primary"
                variant="outlined"
                type="password"
                onChange={(e) => setFormPassword(e.target.value)}
                InputLabelProps={{
                  style: { color: '#000' },
                }}
                className={classes.signUpInput}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Your Password"
                color="primary"
                variant="outlined"
                type="password"
                onChange={(e) => setFormPasswordConfirm(e.target.value)}
                InputLabelProps={{
                  style: { color: '#000' },
                }}
                className={classes.signUpInput}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className={classes.signUpInput}
              >
                Sign Up
              </Button>
            </Grid>
          </form>
          <Grid item xs={12} className={classes.signUpOptionsContainer}>
            <Typography
              variant="h6"
              color="initial"
              align="center"
              className={classes.signUpOptions}
            >
              Already have an account?
              <Link to={signin} className={classes.link}>
                {' '}
                Sign in
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default SignUpContainer;
