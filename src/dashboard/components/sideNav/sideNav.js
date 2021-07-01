import React, { useEffect, useState } from 'react';
import {
  SideNavContainer,
  SideNavTab,
  SideNavTabIcon,
  SideNavTabTitle,
} from './styles';

import { logoutUserAction } from '../../../state/actions/auth/authActions';
import { navTabs } from './navTabs';
import { useDispatch } from 'react-redux';

const SideNav = () => {
  const dispatch = useDispatch();

  const [menueItems, setMenuItems] = useState([]);

  // useEffect(() => {

  // }, []);

  const handleActive = (index) => {
    const newMenuItems = navTabs.map((tab) => {
      return tab.id === index ? (tab.active = true) : (tab.active = false);
    });
    setMenuItems(newMenuItems);
  };

  const resetTabs = () => {
    const newMenuItems = navTabs.map((tab) => {
      return tab.id === 0 ? (tab.active = true) : (tab.active = false);
    });
    setMenuItems(newMenuItems);
  };

  const renderTabs = navTabs.map((tab, idx) => {
    return (
      <SideNavTab
        key={idx}
        active={tab.active}
        onClick={() => {
          handleActive(idx);
          if (tab.title === 'Logout') {
            dispatch(logoutUserAction());
            resetTabs();
          }
        }}
      >
        <SideNavTabIcon>{tab.icon}</SideNavTabIcon>
        <SideNavTabTitle>{tab.title}</SideNavTabTitle>
      </SideNavTab>
    );
  });

  return <SideNavContainer>{renderTabs}</SideNavContainer>;
};

export default SideNav;
