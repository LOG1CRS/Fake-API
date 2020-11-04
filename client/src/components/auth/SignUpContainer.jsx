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

const useStyle = makeStyles((theme) => ({
  signUpContainer: {
    width: '100%',
    maxWidth: 500,
    height: 520,
    borderRadius: 30,
    marginTop: 50,
    [theme.breakpoints.only('xs')]: {
      marginTop: 30,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      boxShadow: theme.shadows[7],
    },
  },
  signUpTitle: {
    marginTop: 32,
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
}));

const SignUpContainer = () => {
  const classes = useStyle();
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
          <Grid item xs={12}>
            <TextField
              label="Email"
              color="primary"
              variant="outlined"
              type="email"
              required
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
              required
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
              required
              InputLabelProps={{
                style: { color: '#000' },
              }}
              className={classes.signUpInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className={classes.signUpInput}
            >
              Sign Up
            </Button>
          </Grid>
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
