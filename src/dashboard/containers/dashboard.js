import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DashboardContainer } from './styles';
import DashboardContent from '../components/dashbardContent/dashboardContent';
import SideNav from '../components/sideNav/sideNav';
import { getCurrentUser } from '../../state/actions/user/userActions';

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
