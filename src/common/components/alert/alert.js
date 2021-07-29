import { AlertContainer } from './styles';
import PropTypes from 'prop-types';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const Alert = ({ open, handleAlert, severity, message }) => {
  const classes = useStyles();
  const vertical = 'top';
  const horizontal = 'center';
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        severity={severity}
        onClose={handleAlert}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
};

Alert.propTypes = {
  severity: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handleAlert: PropTypes.func.isRequired,
};

export default Alert;
