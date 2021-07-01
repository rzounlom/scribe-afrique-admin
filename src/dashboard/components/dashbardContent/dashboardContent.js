import { DashboardContentContainer } from './styles';
import Posts from '../posts/posts';
import Preview from '../preview/preview';
import Profile from '../profile/profile';
import React from 'react';
import Users from '../users/users';
import { useSelector } from 'react-redux';

const DashboardContent = () => {
  const { currentTab } = useSelector((state) => state.dashboard);
  console.log(currentTab);

  const renderContent = () => {
    switch (currentTab) {
      case 0:
        return <Profile />;
      case 1:
        return <Posts />;
      case 2:
        return <Preview />;
      case 3:
        return <Users />;
      default:
        return <Profile />;
    }
  };

  return (
    <DashboardContentContainer>{renderContent()}</DashboardContentContainer>
  );
};

export default DashboardContent;
