import React, { useEffect } from 'react';

import { DashboardContainer } from './styles';
import DashboardContent from '../components/dashbardContent/dashboardContent';
import SideNav from '../components/sideNav/sideNav';
import { getCurrentUser } from '../../state/actions/user/userActions';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  });
  return (
    <DashboardContainer>
      <SideNav />
      <DashboardContent>Dashboard Content</DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
