import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
      height: 50,
      width: 50,
    },
  },
  loadText: {
    fontSize: '2rem',
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color='secondary' />
      <div className={classes.loadText}>Loading...</div>
    </div>
  );
};

export default Loader;
