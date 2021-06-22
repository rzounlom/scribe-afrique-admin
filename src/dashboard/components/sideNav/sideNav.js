import React, { useState } from 'react';
import {
  SideNavContainer,
  SideNavTab,
  SideNavTabIcon,
  SideNavTabTitle,
} from './styles';

import { navTabs } from './navTabs';

const SideNav = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleActive = (index) => {
    navTabs.map((tab) => {
      if (tab.id === index) {
        return setActiveTab(index);
      } else {
        return setActiveTab(activeTab);
      }
    });
  };

  const renderTabs = navTabs.map((tab, idx) => {
    return (
      <SideNavTab
        key={idx}
        active={tab.id === activeTab}
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
