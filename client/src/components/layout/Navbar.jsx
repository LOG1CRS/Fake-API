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
import { home, docs, about, repo, support } from '../../routes/routes.json';

import logoBW from '../../assets/static/Fake-logo-bw.png';

const useStyle = makeStyles((theme) => ({
  appbar: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.complex,
    }),
  },
  navbarContentSpace: {
    flexGrow: 1,
  },
  navbarImg: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.complex,
    }),
    width: 150,
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
    paddingRight: 5,
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
  },
  navButton: {
    color: '#fff',
  },
}));

const Navbar = (props) => {
  const { toggleOpen } = props;
  const classes = useStyle();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar>
            <div className={classes.navbarContentSpace}>
              <Link to={home}>
                <img src={logoBW} alt="Logo" className={classes.navbarImg} />
              </Link>
            </div>
            <Hidden mdDown>
              <div className={classes.navbarContentSpace}>
                <Grid container justify="space-evenly">
                  <Link to={home} className={classes.link}>
                    <Button
                      variant="text"
                      size="large"
                      className={classes.navButton}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link to={docs} className={classes.link}>
                    <Button
                      variant="text"
                      size="large"
                      className={classes.navButton}
                    >
                      Documentation
                    </Button>
                  </Link>
                  <Link to={about} className={classes.link}>
                    <Button
                      variant="text"
                      size="large"
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
                      className={classes.navButton}
                    >
                      Repository
                    </Button>
                  </a>
                </Grid>
              </div>
              <div className={classes.navbarContentSpace}>
                <Grid container justify="flex-end">
                  <Link to={support} className={classes.link}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.navButton}
                    >
                      Support
                    </Button>
                  </Link>
                </Grid>
              </div>
            </Hidden>
            <Hidden lgUp>
              <IconButton
                edge="start"
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
