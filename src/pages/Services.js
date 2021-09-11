import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  manicure,
  pedicure,
  kidServices,
  nailEnhancement,
  additionalServices,
  waxing,
  addOnServices,
  dippingPowder,
} from '../utils/services';
import Service from '../components/Service';

const useStyles = makeStyles((theme) => ({
  servicePage: {
    backgroundColor: '#F8F6F7',
    padding: '20px',
  },
  serviceList: {
    position: 'relative',
    height: 'fit-content',
    backgroundColor: '#FFFFFF',
    padding: '20px',
    '& h1' : {
      fontWeight: 'normal',
      textAlign: 'center',
    }
  },
  waveContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  wave: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    transform: 'rotate(180deg)',
    '& svg': {
      position: 'relative',
      display: 'block',
      width: 'calc(155% + 1.3px)',
      height: '20px',
      [theme.breakpoints.up('sm')]: {
        height: '20px',
      },
    },
  },
  shapeFill: {
    fill: '#F8F6F7',
  },
}));

const Services = () => {
  const classes = useStyles();

  // to make the number of waves in the background
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const waves = arr.map(() => (
    <div className={classes.wave}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        <path
          d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
          className={classes.shapeFill}
        />
      </svg>
    </div>
  ));

  return (
    <div>
      <div className={classes.servicePage}>
        <h1>Services</h1>
        <div className={classes.serviceList}>
          <h1>Manicure</h1>
          {manicure.map((service) => (<Service {...service}/>))}
          <h1>Pedicure</h1>
          {pedicure.map((service) => (<Service {...service}/>))}
          <h1>Dipping Powder - Healthy Nails</h1>
          {dippingPowder.map((service) => (<Service {...service}/>))}
          <h1>Nail Enhancements</h1>
          {nailEnhancement.map((service) => (<Service {...service}/>))}
          <h1>Waxing</h1>
          {waxing.map((service) => (<Service {...service}/>))}
          <h1>Additional Services</h1>
          {additionalServices.map((service) => (<Service {...service}/>))}
          <h1>Add-On Services</h1>
          {addOnServices.map((service) => (<Service {...service}/>))}
          <h1>Kid Services</h1>
          {kidServices.map((service) => (<Service {...service}/>))}
          <div className={classes.waveContainer}>{waves}</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
