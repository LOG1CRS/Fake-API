import React, { useState } from 'react';
import { Grid, makeStyles, Hidden, Drawer } from '@material-ui/core';

import MobileToggleDrawer from './MobileToggleDrawer';
import DrawerItems from './DrawerItems';

const useStyle = makeStyles((theme) => ({
  docs: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.only('xl')]: {
      width: 300,
    },
    [theme.breakpoints.only('lg')]: {
      width: 280,
    },
    [theme.breakpoints.only('md')]: {
      width: 320,
    },
    [theme.breakpoints.only('sm')]: {
      width: 280,
    },
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
    flexShrink: 0,
  },
  drawerPaper: {
    position: 'absolute',
    [theme.breakpoints.only('xl')]: {
      width: 310,
    },
    [theme.breakpoints.only('lg')]: {
      width: 280,
    },
    [theme.breakpoints.only('md')]: {
      width: 320,
    },
    [theme.breakpoints.only('sm')]: {
      width: 280,
    },
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
}));

const DocsMain = () => {
  const classes = useStyle();

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.docs}
    >
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          PaperProps={{ elevation: 3 }}
          anchor="left"
        >
          <DrawerItems />
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="temporary"
          anchor="left"
          open={openDrawer}
          onClose={toggleOpenDrawer}
        >
          <DrawerItems onClose={toggleOpenDrawer} />
        </Drawer>
      </Hidden>
      <MobileToggleDrawer onClose={toggleOpenDrawer} />
    </Grid>
  );
};

export default DocsMain;
