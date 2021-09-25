import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import BookingModal from '../components/BookingModal';

const useStyles = makeStyles({
  root: {
    height: '64vh',
    padding: '20px',
    backgroundColor: '#F8F6F7',
    position: 'relative',
    textAlign: 'center',
  },
  container: {
    // position: 'absolute',
    // top: '15vh',
    // left: 0,
    // width: '100%',
    height: '90%',
    textAlign: 'center',
    // eslint-disable-next-line no-dupe-keys
    textAlign: '-webkit-center',
    justifyContent: 'center',
    // overflow: 'hidden',
    padding: '0px 10px',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#FB9475',
    color: 'white',
    borderRadius: '50px',
  },
  iframe: {
    // width: '80%',
    height: '100%',
    border: 'none',
  },
});

const OnlineBooking = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <h1>Book A Treatment</h1>
      <p>
        *** To ensure quality services, online booking appointments will be
        confirmed via phone by our receptionist. Unconfirmed appointments are
        subject to cancellation.
      </p>
      <Button
        variant='contained'
        classes={{ root: classes.button }}
        onClick={() => setOpen(true)}
      >
        Book Now
      </Button>
      {/* <Paper classes={{root: classes.container}}>
        <iframe
          id='onlineBookingFrame'
          title='Online Booking Frame'
          src={`https://www.rewanow.com/scheduler/${process.env.REACT_APP_REWANOW_ID}`}
          className={classes.iframe}
        />
      </Paper> */}
      <BookingModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default OnlineBooking;
