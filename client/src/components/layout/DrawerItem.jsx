import React from 'react';
import {
  makeStyles,
  Drawer,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
  Hidden,
} from '@material-ui/core';
import {
  Home,
  Description,
  SupervisorAccount,
  GitHub,
  Favorite,
} from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import {
  home,
  docs,
  about,
  repo,
  support,
  signin,
  signup,
  license,
  dashboard,
} from '../../routes/routes.json';
import RenderIfAuth from '../../utils/RenderIfAuth';

import fakeLogo from '../../assets/static/Fake-drawer.png';

const styles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.only('md')]: {
      width: 320,
    },
    [theme.breakpoints.only('sm')]: {
      width: 260,
    },
    [theme.breakpoints.only('xs')]: {
      width: 240,
    },
    flexShrink: 0,
    zIndex: '1302 !important',
  },
  drawerPaper: {
    [theme.breakpoints.only('md')]: {
      width: 320,
    },
    [theme.breakpoints.only('sm')]: {
      width: 260,
    },
    [theme.breakpoints.only('xs')]: {
      width: 240,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerImg: {
    [theme.breakpoints.only('md')]: {
      width: 200,
    },
    [theme.breakpoints.down('sm')]: {
      width: 150,
    },
  },
  drawerImgContainer: {
    width: '100%',
    height: 150,
    [theme.breakpoints.down('sm')]: {
      height: 95,
    },
  },
  itemSpace: {
    marginBottom: 10,
    [theme.breakpoints.only('md')]: {
      marginBottom: 20,
    },
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    width: '100%',
  },
  list: {
    width: '100%',
  },
  drawerTitle: {
    textAlign: 'center',
    [theme.breakpoints.only('md')]: {
      marginTop: 20,
      fontSize: 25,
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 18,
      fontSize: 22,
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: 15,
      fontSize: 20,
    },
  },
  menuContainer: {
    flexGrow: 1,
  },
  licenseContainer: {
    paddingBottom: 16,
    paddingTop: 8,
  },
}));

const DrawerItem = (props) => {
  const classes = styles();
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    props.onClose();
    history.push(home);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      classes={{ paper: classes.drawerPaper }}
      anchor="right"
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <Grid
        container
        alignContent="center"
        justify="center"
        className={classes.drawerImgContainer}
      >
        <Link to={home} onClick={props.onClose ? props.onClose : null}>
          <img src={fakeLogo} alt="fake-icon" className={classes.drawerImg} />
        </Link>
      </Grid>
      <Divider className={classes.itemSpace} />
      <Grid container className={classes.menuContainer}>
        <List component="nav" className={classes.list}>
          <ListItem
            button
            className={classes.itemSpace}
            component={Link}
            to={home}
            onClick={props.onClose ? props.onClose : null}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            className={classes.itemSpace}
            component={Link}
            to={docs}
            onClick={props.onClose ? props.onClose : null}
          >
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Documentation" />
          </ListItem>
          <ListItem
            to={about}
            component={Link}
            button
            className={classes.itemSpace}
            onClick={props.onClose ? props.onClose : null}
          >
            <ListItemIcon>
              <SupervisorAccount />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            onClick={props.onClose ? props.onClose : null}
          >
            <ListItem button className={classes.itemSpace}>
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary="Repository" className={classes.link} />
            </ListItem>
          </a>
          <Divider className={classes.itemSpace} />
          <RenderIfAuth ifNot>
            <ListItem className={classes.itemSpace}>
              <Link to={signin} className={classes.link}>
                <Button
                  variant="outlined"
                  color="inherit"
                  fullWidth
                  size="large"
                  onClick={props.onClose ? props.onClose : null}
                >
                  Sign In
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.itemSpace}>
              <Link to={signup} className={classes.link}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={props.onClose ? props.onClose : null}
                >
                  Sign Up
                </Button>
              </Link>
            </ListItem>
          </RenderIfAuth>
          <RenderIfAuth>
            <ListItem className={classes.itemSpace}>
              <Link to={dashboard} className={classes.link}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={props.onClose ? props.onClose : null}
                >
                  Dashboard
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.itemSpace}>
              <Button
                variant="outlined"
                color="inherit"
                fullWidth
                size="large"
                onClick={() => handleLogOut()}
              >
                Log Out
              </Button>
            </ListItem>
          </RenderIfAuth>
        </List>
      </Grid>
      <List component="nav" className={classes.list}>
        <ListItem className={classes.itemSpace}>
          <Link to={support} className={classes.link}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              startIcon={<Favorite />}
              onClick={props.onClose ? props.onClose : null}
            >
              Support
            </Button>
          </Link>
        </ListItem>
      </List>
      <Hidden only="xs">
        <Divider className={classes.itemSpace} />
        <Grid container justify="center" className={classes.licenseContainer}>
          <a
            href={license}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            onClick={props.onClose ? props.onClose : null}
          >
            <Typography variant="body1" color="initial" align="center">
              &copy; Mit License
            </Typography>
          </a>
        </Grid>
      </Hidden>
    </Drawer>
  );
};

export default DrawerItem;
