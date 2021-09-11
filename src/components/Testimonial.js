import React from 'react'
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { testimonial } from '../utils/testimonial';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  parallaxWhiteNailPolish: {
    backgroundImage: `url(https://res.cloudinary.com/dgpijcm0x/image/upload/v1631388896/VNMiNailSpa/nail_stuff.jpg)`,
    minHeight: '50vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.6',
    [theme.breakpoints.up('sm')]: {
      backgroundAttachment: 'fixed',
    },
  },
  testimonialMsg: {
    position: 'absolute',
    top: '0vh',
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  carousel: {
    height: '72%',
    '& div': {
      height: '100%',
    },
    '& div div': {
      height: '100%',
    }
  },
  carouselItem: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    '& p': {
      width: '80%',
      alignSelf: 'center',
    },
    '& h2': {
      fontWeight: 300,
      paddingBottom: '3em',
    }
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: '10% !important',
  }
}));

const Testimonials = () => {

  const classes = useStyles();

  return (
    <div id="testimonials-container" className={classes.root}>
      <div className={classes.parallaxWhiteNailPolish} />
      <div className={classes.testimonialMsg}>
        <h1>Testimonials</h1>
        <Carousel classes={{root: classes.carousel, indicators: classes.indicator}}>
          {testimonial.map((item, i) => (
            <div key={i} className={classes.carouselItem}>
              <p>
                {item.message}
              </p>
              <h2>
                {item.name}
              </h2>
            </div>))}
        </Carousel>
      </div>
    </div>
  )

}

export default Testimonials;