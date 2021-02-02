import React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Toolbar,
  IconButton,
  DialogTitle,
  Hidden,
  makeStyles,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  dialog: { zIndex: 1299 },
  iconButton: { position: 'absolute', top: 5, right: 5 },
  title: { fontSize: 60, marginBottom: 20 },
}));

const UserInputDialog = (props) => {
  const { open, setOpen, title, children } = props;
  const classes = useStyles();
  const closeHandler = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <>
      <Hidden smUp>
        <Dialog open={open} fullScreen className={classes.dialog}>
          <Toolbar>
            <IconButton onClick={closeHandler} className={classes.iconButton}>
              <Close fontSize="large" />
            </IconButton>
          </Toolbar>
          <DialogTitle disableTypography>
            <Typography
              variant="h1"
              color="primary"
              align="center"
              className={classes.title}
            >
              {title}
            </Typography>
          </DialogTitle>
          <DialogContent>{children}</DialogContent>
        </Dialog>
      </Hidden>
      <Hidden only="xs">
        <Dialog open={open} maxWidth="md" className={classes.dialog}>
          <Toolbar>
            <IconButton onClick={closeHandler} className={classes.iconButton}>
              <Close fontSize="large" />
            </IconButton>
          </Toolbar>
          <DialogTitle disableTypography>
            <Typography
              variant="h1"
              color="primary"
              align="center"
              className={classes.title}
            >
              {title}
            </Typography>
          </DialogTitle>
          <DialogContent>{children}</DialogContent>
        </Dialog>
      </Hidden>
    </>
  );
};

export default UserInputDialog;
