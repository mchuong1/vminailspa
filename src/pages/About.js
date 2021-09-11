import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AdvancedImage } from '@cloudinary/react';
import { coverEyesGirl, nailBottles } from '../utils/photos';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonial';

const useStyles = makeStyles((theme) => ({
  aboutPage: {
    padding: '20px',
    backgroundColor: '#F8F6F7',
    position: 'relative',
    height: '72vh',
    '& h1': {
      fontSize: '53px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '86vh',
      '& h1': {
        fontSize: '100px',
        margin: 0,
        fontWeight: 400,
      },
      '& p': {
        fontSize: '32px',
        position: 'absolute',
        right: 0,
        width: '1000px',
      },
    },
  },
  coverEyesGirl: {
    width: '135%',
    position: 'absolute',
    bottom: 0,
    left: '-19vw',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      left: '-9vw',
    },
  },
  rectangle: {
    backgroundColor: '#F8F6F7',
    height: '40%',
    width: '100%',
    position: 'absolute',
    top: '45vh',
    zIndex: -1,
    [theme.breakpoints.up('sm')]: {
      height: '50%',
      width: '80%',
      top: '26vh',
    },
  },
  WhyChooseUs: {
    position: 'relative',
    height: '100vh',
    '& h1': {
      position: 'absolute',
      fontSize: '53px',
      paddingLeft: '20px',
    },
    '& p': {
      position: 'absolute',
      top: '20vh',
      padding: '20px',
    },
    '& button': {
      position: 'absolute',
      marginLeft: '5px',
      top: '53vh',
    },
    [theme.breakpoints.up('sm')]: {
      '& h1': {
        fontSize: '100px',
        margin: 0,
        left: '5vw',
        fontWeight: 400,
      },
      '& p': {
        fontSize: '24px',
        top: '24vh',
        width: '505px',
        left: '5vw',
      },
    },
  },
  nailBottles: {
    width: '135%',
    position: 'absolute',
    bottom: '0',
    left: '-19vw',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      bottom: '-9vh',
      left: '45vw',
    },
  },
  testimonial: {
    padding: '20px',
    '& h1': {
      fontSize: '53px',
      paddingLeft: '20px',
    },
  },
  container: {
    padding: '20px',
    backgroundColor: '#F8F6F7',
  },
}));

const About = () => {
  const classes = useStyles();
  const aboutMessage = `We take customer satisfaction as our pride. We try our level best to make the customer experience simply the best. We make sure every single product we use is of great quality. We take great care of our salon's hygiene. All of our staff is highly trained and quite experienced too. All our services come with a 5-day guarantee. A clean, warm and friendly place is welcoming you.`;

  return (
    <div id='aboutpage'>
      <div className={classes.aboutPage}>
        <h1>About Us</h1>
        <p>{aboutMessage}</p>
        <AdvancedImage
          cldImg={coverEyesGirl}
          className={classes.coverEyesGirl}
        />
      </div>
      <div className={classes.WhyChooseUs}>
        <h1>Why Choose Us?</h1>
        <p>
          What can we create for you, how can improve or maintain you current
          look? We always learning something fresh and new while keeping with
          today&apos;s trends. We taking the trends of today and making it
          uniquely yours. We may take a lot of time to create your look, but
          that is so you don&apos;t have to spend a lot of time to maintain the
          new you.
        </p>
        <AdvancedImage cldImg={nailBottles} className={classes.nailBottles} />
        <div className={classes.rectangle} />
      </div>
      <Testimonials />
      <Contact />
    </div>
  );
};

export default About;
