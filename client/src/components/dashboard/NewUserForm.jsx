import React from 'react';
import {
  Typography,
  Grid,
  makeStyles,
  TextField,
  Button,
  Container,
  Hidden,
} from '@material-ui/core';

import { PersonAdd } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 50,
  },
  radio: {
    color: theme.palette.secondary.main,
  },
}));

const NewUserForm = () => {
  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            color="primary"
            align="center"
            style={{ fontSize: 60, marginBottom: 20 }}
          >
            New User
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Name"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Last Name"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Age"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Birthday"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Gender"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Cellphone"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Email"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-end">
            <Hidden only="xs">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PersonAdd />}
              >
                Crear
              </Button>
            </Hidden>
            <Hidden smUp>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PersonAdd />}
                fullWidth
              >
                Crear
              </Button>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewUserForm;
