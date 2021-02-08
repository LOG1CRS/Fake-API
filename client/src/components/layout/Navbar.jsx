import React, { useState } from 'react';
import ElevationScroll from '../../utils/ElevationScroll';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Hidden,
  Button,
  IconButton,
  Grid,
  Avatar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  home,
  docs,
  about,
  repo,
  support,
  signin,
  dashboard,
  signup,
} from '../../routes/routes.json';
import RenderIfAuth from '../../utils/RenderIfAuth';

import logoBW from '../../assets/static/Fake-logo-bw.png';

const useStyle = makeStyles((theme) => ({
  appbar: {
    zIndex: 1298,
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
    [theme.breakpoints.only('md')]: {
      marginTop: 10,
      marginBottom: 10,
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 2,
      marginBottom: 2,
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: 2,
      marginBottom: 2,
      paddingLeft: 17,
      paddingRight: 17,
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
    '&:hover': {
      backgroundColor: 'rgb(241, 192, 45, 0.35)',
    },
  },
  navButtonActive: {
    textTransform: 'none',
    [theme.breakpoints.only('xl')]: {
      fontSize: 18,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 14,
    },
    '&:hover': {
      backgroundColor: 'rgb(241, 192, 45, 0.35)',
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
  avatar: {
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    fontSize: 25,
  },
}));

const Navbar = (props) => {
  const { toggleOpen } = props;
  const user = JSON.parse(localStorage.getItem('user'));
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyle();
  const route = useLocation();
  const history = useHistory();

  const handleMenu = (e) => {
    setOpenMenu(e.currentTarget);
  };

  const handleLogOut = () => {
    setOpenMenu(null);
    localStorage.removeItem('token');
    history.push(home);
  };

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
                      className={
                        route.pathname === '/docs'
                          ? classes.navButtonActive
                          : classes.navButton
                      }
                    >
                      Documentation
                    </Button>
                  </Link>
                  <Link to={about} className={classes.link}>
                    <Button
                      variant="text"
                      size="large"
                      color="primary"
                      className={
                        route.pathname === '/about'
                          ? classes.navButtonActive
                          : classes.navButton
                      }
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
                      className={
                        route.pathname === '/support-us'
                          ? classes.navButtonActive
                          : classes.navButton
                      }
                    >
                      Support
                    </Button>
                  </Link>
                </Grid>
              </div>
              <div className={classes.navbarContentSpace}>
                <RenderIfAuth ifNot>
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
                </RenderIfAuth>
                <RenderIfAuth>
                  <Grid container justify="flex-end">
                    <IconButton size="medium" onClick={handleMenu}>
                      <Avatar className={classes.avatar}>{user.name[0]}</Avatar>
                    </IconButton>
                    <Menu
                      anchorEl={openMenu}
                      keepMounted
                      open={Boolean(openMenu)}
                      onClose={() => setOpenMenu(null)}
                    >
                      <MenuItem
                        onClick={() => {
                          setOpenMenu(null);
                          history.push(dashboard);
                        }}
                      >
                        Dashboard
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setOpenMenu(null);
                        }}
                      >
                        Settings
                      </MenuItem>
                      <MenuItem onClick={() => handleLogOut()}>
                        Log Out
                      </MenuItem>
                    </Menu>
                  </Grid>
                </RenderIfAuth>
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
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Navbar;
