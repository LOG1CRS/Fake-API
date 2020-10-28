import React from 'react';
import ElevationScroll from './ElevationScroll';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Hidden,
  Button,
  IconButton,
  Grid,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {
  home,
  docs,
  about,
  repo,
  support,
  signin,
  signup,
} from '../../routes/routes.json';

import logoBW from '../../assets/static/Fake-logo-bw.png';

const useStyle = makeStyles((theme) => ({
  appbar: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.complex,
    }),
  },
  navbarContentSpace: {
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
    },
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100vw / 3)',
    },
  },
  contentNavbar: {
    [theme.breakpoints.only('xl')]: {
      marginTop: 10,
      marginBottom: 10,
    },
  },
  navbarImg: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.complex,
    }),
    width: 140,
    marginRight: 10,
    [theme.breakpoints.down('lg')]: {
      width: 120,
    },
    [theme.breakpoints.only('xs')]: {
      marginRight: 15,
      marginTop: 5,
      width: 110,
    },
  },
  menuButton: {
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
  },
  navButton: {
    color: '#fff',
    textTransform: 'none',
    [theme.breakpoints.only('xl')]: {
      fontSize: 18,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 14,
    },
  },
  navSupportButton: {
    textTransform: 'none',
    [theme.breakpoints.only('xl')]: {
      fontSize: 18,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 14,
    },
  },
  signinButton: {
    [theme.breakpoints.only('xl')]: {
      marginRight: 25,
    },
    [theme.breakpoints.only('lg')]: {
      marginRight: 20,
    },
  },
}));

const Navbar = (props) => {
  const { toggleOpen } = props;
  const classes = useStyle();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar className={classes.contentNavbar}>
            <div className={classes.navbarContentSpace}>
              <Link to={home}>
                <img src={logoBW} alt="Logo" className={classes.navbarImg} />
              </Link>
            </div>
            <Hidden mdDown>
              <div className={classes.navbarContentSpace}>
                <Grid container justify="space-between">
                  <Link to={docs} className={classes.link}>
                    <Button
                      variant="text"
                      size="large"
                      color="primary"
                      className={classes.navButton}
                    >
                      Documentation
                    </Button>
                  </Link>
                  <Link to={about} className={classes.link}>
                    <Button
                      variant="text"
                      size="large"
                      color="primary"
                      className={classes.navButton}
                    >
                      About
                    </Button>
                  </Link>
                  <a
                    href={repo}
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="text"
                      size="large"
                      color="primary"
                      className={classes.navButton}
                    >
                      Repository
                    </Button>
                  </a>
                  <Link to={support} className={classes.link}>
                    <Button
                      variant="text"
                      color="primary"
                      size="large"
                      className={classes.navSupportButton}
                    >
                      Support
                    </Button>
                  </Link>
                </Grid>
              </div>
              <div className={classes.navbarContentSpace}>
                <Grid container justify="flex-end">
                  <Link to={signin} className={classes.link}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      className={`${classes.navButton} ${classes.signinButton}`}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to={signup} className={classes.link}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.navButton}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Grid>
              </div>
            </Hidden>
            <Hidden lgUp>
              <IconButton
                edge="end"
                className={classes.menuButton}
                aria-label="menu"
                size="medium"
                onClick={() => toggleOpen()}
              >
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Navbar;
