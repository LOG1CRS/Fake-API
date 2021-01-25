import React from 'react';
import {
  Typography,
  Grid,
  makeStyles,
  OutlinedInput,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Button,
  Container,
} from '@material-ui/core';

import { PersonAdd } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '101vh',
    [theme.breakpoints.only('xs')]: {
      height: '100%',
      padding: theme.spacing(2),
    },
    backgroundColor: theme.palette.background.default,
  },
  gridContainer: {
    height: '100%',
  },
  radio: {
    color: theme.palette.secondary.main,
  },
}));

const NewUserForm = () => {
  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <Grid
        container
        justify="center"
        alignContent="center"
        spacing={3}
        className={classes.gridContainer}
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            color="initial"
            align="center"
            style={{ fontSize: 40 }}
          >
            New User
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8}>
          <form>
            <Grid container justify="center">
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  justify="center"
                  className={classes.gridContainer}
                >
                  <Grid item xs={12}>
                    <Typography align="center" variant="h6">
                      Nombre
                    </Typography>
                  </Grid>
                  <OutlinedInput />
                  <Grid item xs={12}>
                    <Typography align="center" variant="h6">
                      Edad
                    </Typography>
                  </Grid>
                  <OutlinedInput type="number" />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  justify="center"
                  className={classes.gridContainer}
                >
                  <Grid item xs={12}>
                    <Typography align="center" variant="h6">
                      Apellido Materno
                    </Typography>
                  </Grid>
                  <OutlinedInput />
                  <Grid item xs={12}>
                    <Typography align="center" variant="h6">
                      Apellido Paterno
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify="center">
                      <OutlinedInput />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  justify="center"
                  className={classes.gridContainer}
                >
                  <Grid item xs={12}>
                    <Typography align="center" variant="h6">
                      Fecha de Nacimiento
                    </Typography>
                  </Grid>
                  <OutlinedInput type="date" />
                  <Grid item xs={12}>
                    <Typography align="center" variant="h6">
                      Sexo
                    </Typography>
                  </Grid>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" row>
                      <FormControlLabel
                        value="masculino"
                        control={<Radio className={classes.radio} />}
                        label="Masculino"
                      />
                      <FormControlLabel
                        value="femenino"
                        control={<Radio className={classes.radio} />}
                        label="Femenino"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  justify="center"
                  className={classes.gridContainer}
                >
                  <Grid item xs={12}>
                    <Typography align="center" variant="h6">
                      Email
                    </Typography>
                  </Grid>
                  <OutlinedInput type="email" />
                  <Grid item xs={12}>
                    <Typography align="center" variant="h6">
                      Telefono
                    </Typography>
                  </Grid>
                  <OutlinedInput type="tel" />
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Button
              variant="contained"
              color="primary"
              startIcon={<PersonAdd />}
            >
              Crear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewUserForm;
