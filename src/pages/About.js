import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AdvancedImage } from '@cloudinary/react';
import { coverEyesGirl, gallery } from '../utils/photos';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonial';
import WhySection from '../components/WhySection';

const useStyles = makeStyles((theme) => ({
  aboutPage: {
    padding: '20px',
    backgroundColor: '#F8F6F7',
    position: 'relative',
    height: '110vh',
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
    top: '65vh',
    zIndex: -1,
    [theme.breakpoints.up('sm')]: {
      height: '50%',
      width: '80%',
      top: '26vh',
    },
  },
  WhyChooseUs: {
    // position: 'relative',
    // height: '125vh',
    '& h1': {
      // position: 'absolute',
      fontSize: '53px',
      paddingLeft: '20px',
      marginBottom: 0,
    },
    '& ul': {
      position: 'absolute',
      top: '20vh',
      padding: '20px',
      marginLeft: '20px',
      fontSize: '24px',
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
      '& ul': {
        fontSize: '24px',
        top: '36vh',
        width: '505px',
        left: '5vw',
      },
    },
  },
  nailBottles: {
    width: '135%',
    position: 'absolute',
    bottom: '-3vh',
    left: '-19vw',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      bottom: '14vh',
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
  const aboutMessage = `We have many years of experience in the nail business and strive to provide the very highest quality of work. We offer an odorless relaxing atmosphere, and cleanliness is a top priority. Implements come in hospital grade sterilized pouches, utensils are used only once for each customer, and pedicure basins are freshly lined for each customer to ensure proper sanitization.`;

  return (
    <div id='aboutpage'>
      <div style={{overflow: 'hidden'}}>
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
        {gallery.map((item, i) => (
          <WhySection key={i} img={item.src} description={item.description} right={i%2===0}/>
        ))}
      </div>
      <Testimonials />
      </div>
      <Contact />
    </div>
  );
};

export default About;
