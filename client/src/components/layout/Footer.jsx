import React from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  Button,
  Container,
  Hidden,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { home, docs, about, repo } from '../../routes/routes.json';

import footerImg from '../../assets/static/Fake-logo-color.png';

const useStyle = makeStyles((theme) => ({
  footer: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.only('xl')]: {
      height: 280,
    },
    [theme.breakpoints.down('lg')]: {
      height: 250,
    },
    [theme.breakpoints.only('xs')]: {
      height: 400,
    },
  },
  footerLogo: {
    [theme.breakpoints.only('xl')]: {
      fontSize: 26,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 23,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 27,
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
  footerImg: {
    [theme.breakpoints.only('xl')]: {
      marginTop: 50,
      width: 210,
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: 40,
      width: 170,
    },
  },
  footerImgContainer: {
    height: '30%',
    [theme.breakpoints.only('xs')]: {
      height: '20%',
    },
  },
  footerMenuContainer: {
    height: '60%',
    [theme.breakpoints.only('xs')]: {
      height: '70%',
    },
  },
  footerLicenseContainer: {
    height: '10%',
  },
  footerMenuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      marginTop: 6,
      marginBottom: 6,
    },
  },
  footerLicense: {
    fontSize: 13,
  },
  container: {
    height: '100%',
  },
  footerButton: {
    color: '#fff',
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.footer}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.footerImgContainer}
      >
        <Link to={home}>
          <img src={footerImg} alt="" className={classes.footerImg} />
        </Link>
      </Grid>
      <Grid
        container
        className={classes.footerMenuContainer}
        alignItems="center"
        justify="space-evenly"
      >
        <Hidden only="xs">
          <Container fixed>
            <Grid container>
              <Grid item sm={3} className={classes.footerMenuItem}>
                <Link to={home} className={classes.link}>
                  <Button
                    variant="text"
                    size="large"
                    className={classes.footerButton}
                  >
                    Home
                  </Button>
                </Link>
              </Grid>
              <Grid item sm={3} className={classes.footerMenuItem}>
                <Link to={docs} className={classes.link}>
                  <Button
                    variant="text"
                    size="large"
                    className={classes.footerButton}
                  >
                    Documentation
                  </Button>
                </Link>
              </Grid>
              <Grid item sm={3} className={classes.footerMenuItem}>
                <Link to={about} className={classes.link}>
                  <Button
                    variant="text"
                    size="large"
                    className={classes.footerButton}
                  >
                    About
                  </Button>
                </Link>
              </Grid>
              <Grid item sm={3} className={classes.footerMenuItem}>
                <a
                  href={repo}
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="text"
                    size="large"
                    className={classes.footerButton}
                  >
                    Repository
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Container>
        </Hidden>
        <Hidden smUp>
          <Grid container>
            <Grid item xs={12} className={classes.footerMenuItem}>
              <Link to={home} className={classes.link}>
                <Button
                  variant="text"
                  size="large"
                  className={classes.footerButton}
                >
                  Home
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} className={classes.footerMenuItem}>
              <Link to={docs} className={classes.link}>
                <Button
                  variant="text"
                  size="large"
                  className={classes.footerButton}
                >
                  Documentation
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} className={classes.footerMenuItem}>
              <Link to={about} className={classes.link}>
                <Button
                  variant="text"
                  size="large"
                  className={classes.footerButton}
                >
                  About
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} className={classes.footerMenuItem}>
              <a
                href={repo}
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="text"
                  size="large"
                  className={classes.footerButton}
                >
                  Repository
                </Button>
              </a>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        container
        className={classes.footerLicenseContainer}
        alignItems="center"
        justify="center"
      >
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.footerLicense}
        >
          &copy; MIT License
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
