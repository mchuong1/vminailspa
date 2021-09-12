import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '64vh',
    padding: '20px',
    backgroundColor: '#F8F6F7',
    position: 'relative',
  },
  container: {
    // position: 'absolute',
    // top: '15vh',
    // left: 0,
    // width: '100%',
    height: '100%',
    textAlign: 'center',
    // eslint-disable-next-line no-dupe-keys
    textAlign: '-webkit-center',
    justifyContent: 'center',
    // overflow: 'hidden',
    padding: '0px 10px'
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#FB9475',
    color: 'white',
    borderRadius: '50px',
  },
  iframe: {
    width: '80%',
    height: '100%',
    border: 'none',
  }
});

const OnlineBooking = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Book A Treatment</h1>
      <Paper classes={{root: classes.container}}>
        <iframe
          id='onlineBookingFrame'
          title='Online Booking Frame'
          src='https://www.rewanow.com/scheduler/6147101790568448'
          className={classes.iframe}
        />
      </Paper>
    </div>
  );
};

export default OnlineBooking;
