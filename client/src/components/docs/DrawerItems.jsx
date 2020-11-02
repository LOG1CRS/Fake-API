import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
  Hidden,
  Grid,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  toolbar: {
    minHeight: 80,
    [theme.breakpoints.only('xs')]: {
      minHeight: 50,
    },
    [theme.breakpoints.only('sm')]: {
      minHeight: 55,
    },
    [theme.breakpoints.only('lg')]: {
      minHeight: 65,
    },
  },
}));

const DrawerItems = (props) => {
  const { onClose } = props;
  const classes = useStyle();
  return (
    <List>
      <div className={classes.toolbar} />
      <Hidden mdUp>
        <Grid container justify="flex-end">
          <IconButton onClick={onClose} size="medium">
            <Close fontSize="large" />
          </IconButton>
        </Grid>
      </Hidden>
      <ListItem button>
        <ListItemText primary="Test" />
      </ListItem>
    </List>
  );
};

export default DrawerItems;
