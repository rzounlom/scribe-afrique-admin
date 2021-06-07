import './app.scss';
import PropTypes from 'prop-types';

import Header from '../../header/containers/header';

const App = () => {
  return (
    <div className='app' data-test='component-app'>
      <Header />
    </div>
  );
};

App.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default App;
