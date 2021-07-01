import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import SideNav from '../sideNav/sideNav';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const ToggleNav = () => {
  const classes = useStyles();
  const [navToggle, setNavToggle] = useState(false);
  const toggleNav = () => setNavToggle(!navToggle);
  return (
    <div style={{ width: '100%' }}>
      <Button onClick={toggleNav}>toggle nav</Button>
      <Drawer
        variant='persistent'
        className={classes.list}
        anchor={'left'}
        open={navToggle}
        onClose={toggleNav}
      >
        <SideNav />
      </Drawer>
    </div>
  );
};

export default ToggleNav;
