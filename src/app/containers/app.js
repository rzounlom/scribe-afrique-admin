import React, { useEffect } from 'react';

import AppRouter from '../../router/router';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  useEffect(() => {});
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
