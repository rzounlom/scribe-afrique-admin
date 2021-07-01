import PropTypes from 'prop-types';
import React from 'react';
import { SettingsContainer } from './styles';
import { useSelector } from 'react-redux';

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const username = currentUser?.username || '';
  return (
    <SettingsContainer>
      <h1>Welcome,{username}</h1>
    </SettingsContainer>
  );
};

Profile.propTypes = {};

export default Profile;
