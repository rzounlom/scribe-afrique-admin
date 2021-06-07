import './app.scss';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <div className='app' data-test='component-app'>
      App
    </div>
  );
};

App.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default App;
