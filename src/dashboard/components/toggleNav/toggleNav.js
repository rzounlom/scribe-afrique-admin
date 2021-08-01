import React, { Fragment, useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideNav from '../sideNav/sideNav';
import { ToggleNavContainer } from './styles';
import clsx from 'clsx';
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
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role='presentation'
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <SideNav open={state.left} />
      </div>
    );
  };

  return (
    <ToggleNavContainer>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          <GiHamburgerMenu onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </ToggleNavContainer>
  );
};

export default ToggleNav;
