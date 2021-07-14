import React, { Component } from 'react';

const requireAuth = (ComposedComponent) => {
  const Authentication = (props) => <ComposedComponent {...props} />;

  return Authentication;
};

export default requireAuth;
