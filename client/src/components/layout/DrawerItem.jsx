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
} from '@material-ui/core';
import {
  Home,
  Description,
  SupervisorAccount,
  GitHub,
  Favorite,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {
  home,
  docs,
  about,
  repo,
  support,
  license,
} from '../../routes/routes.json';

import fakeLogo from '../../assets/static/Fake-icon.png';

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
      width: 85,
    },
    [theme.breakpoints.down('sm')]: {
      width: 60,
    },
  },
  drawerImgContainer: {
    width: '100%',
    height: 150,
    [theme.breakpoints.down('sm')]: {
      height: 120,
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
        <Link to={home}>
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
          <ListItem className={classes.itemSpace}>
            <Link to={support} className={classes.link}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                startIcon={<Favorite />}
              >
                Support
              </Button>
            </Link>
          </ListItem>
        </List>
      </Grid>
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
    </Drawer>
  );
};

export default DrawerItem;
