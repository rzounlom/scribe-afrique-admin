import Alert from '../../../common/components/alert/alert';
import { DashboardContentContainer } from './styles';
import Posts from '../posts/posts';
import Preview from '../preview/preview';
import React from 'react';
import Settings from '../settings/settings';
import ToggleNav from '../toggleNav/toggleNav';
import Users from '../users/users';
import { useSelector } from 'react-redux';

const DashboardContent = () => {
  const { currentTab } = useSelector((state) => state.dashboard);
  const renderContent = () => {
    switch (currentTab) {
      case 0:
        return <Posts />;
      case 1:
        return <Preview />;
      case 2:
        return <Users />;
      case 3:
        return <Settings />;
      default:
        return <Posts />;
    }
  };

  return (
    <DashboardContentContainer>
      <Alert />
      <ToggleNav />
      {renderContent()}
    </DashboardContentContainer>
  );
};

export default DashboardContent;
