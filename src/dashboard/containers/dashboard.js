import { DashboardContainer } from './styles';
import DashboardContent from '../components/dashbardContent/dashboardContent';
import React from 'react';
import SideNav from '../components/sideNav/sideNav';

const Dashboard = (props) => {
  return (
    <DashboardContainer>
      <SideNav />
      <DashboardContent>Dashboard Content</DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
