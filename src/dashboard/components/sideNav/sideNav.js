import React, { useState } from 'react';
import {
  SideNavContainer,
  SideNavTab,
  SideNavTabIcon,
  SideNavTabTitle,
} from './styles';

import { navTabs } from './navTabs';

const SideNav = () => {
  const [menueItems, setMenuItems] = useState([]);
  const handleActive = (index) => {
    const newMenuItems = navTabs.map((tab) => {
      return tab.id === index ? (tab.active = true) : (tab.active = false);
    });
    setMenuItems(newMenuItems);
  };

  const renderTabs = navTabs.map((tab, idx) => {
    return (
      <SideNavTab
        key={idx}
        active={tab.active}
        onClick={() => handleActive(idx)}
      >
        <SideNavTabIcon>{tab.icon}</SideNavTabIcon>
        <SideNavTabTitle>{tab.title}</SideNavTabTitle>
      </SideNavTab>
    );
  });

  return <SideNavContainer>{renderTabs}</SideNavContainer>;
};

export default SideNav;
