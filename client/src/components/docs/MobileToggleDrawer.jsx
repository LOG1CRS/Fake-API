import React from 'react';
import { Fab, makeStyles, Hidden } from '@material-ui/core';
import { FormatListBulleted } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(4),
    left: theme.spacing(4),
    [theme.breakpoints.only('xs')]: {
      bottom: theme.spacing(3),
      left: theme.spacing(3),
    },
  },
}));

const MobileToggleDrawer = (props) => {
  const { onClose } = props;
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <Hidden only="xs">
          <Fab
            color="primary"
            size="large"
            aria-label="Open list"
            onClick={onClose}
          >
            <FormatListBulleted />
          </Fab>
        </Hidden>
        <Hidden smUp>
          <Fab
            color="primary"
            size="medium"
            aria-label="Open list"
            onClick={onClose}
          >
            <FormatListBulleted />
          </Fab>
        </Hidden>
      </Hidden>
    </div>
  );
};

export default MobileToggleDrawer;
