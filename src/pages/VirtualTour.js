import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // padding: '50px'
  },
  iframeContainer: {
    height: '100%',
    paddingTop: '75%',
    position: 'relative',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    position: 'absolute',
    top: 0,
  },
});

const VirtualTour = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div className={classes.iframeContainer}> */}
        <iframe
          id='virtualTourFrame'
          title='Virtual Tour Frame'
          src='https://vnmispa.com'
          className={classes.iframe}
          allowFullScreen
        />
      {/* </div> */}
    </div>
  );
};

export default VirtualTour;
