import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '64vh',
    padding: '20px',
    backgroundColor: '#F8F6F7',
    position: 'relative',
  },
  container: {
    position: 'absolute',
    top: '15vh',
    left: 0,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // eslint-disable-next-line no-dupe-keys
    textAlign: '-webkit-center',
    justifyContent: 'center'
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#FB9475',
    color: 'white',
    borderRadius: '50px',
  },
});

const OnlineBooking = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1>Book A Treatment</h1>
        <div>View a list of our treatments and book</div>
        <Button variant='contained' classes={{ root: classes.button }}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default OnlineBooking;
