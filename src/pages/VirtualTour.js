import React from 'react';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: '50px',
      height: '100vh',
    },
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
    // position: 'absolute',
    // top: 0,
  },
  absoluteiFrame: {
    width: '100%',
    height: '100%',
    border: 'none',
    position: 'absolute',
    top: 0,
  }
}));

const VirtualTour = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      {isDesktop ? (
        <iframe
          id='virtualTourFrame'
          title='Virtual Tour Frame'
          src='https://vnmispa.com'
          className={classes.iframe}
          allowFullScreen
        />
      ) : (
        <div className={classes.iframeContainer}>
          <iframe
            id='virtualTourFrame'
            title='Virtual Tour Frame'
            src='https://vnmispa.com'
            className={classes.absoluteiFrame}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default VirtualTour;
