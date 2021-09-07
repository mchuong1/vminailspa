import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { AdvancedImage } from '@cloudinary/react';
import Carousel from 'react-material-ui-carousel';
import { coverEyesGirl, nailBottles } from '../utils/photos';
import { testimonial } from '../utils/testimonial';
import Contact from '../components/Contact';

const useStyles = makeStyles({
  aboutPage: {
    padding: '20px',
    backgroundColor: '#F8F6F7',
    position: 'relative',
    height: '72vh',
    '& h1': {
      fontSize: '53px',
    },
  },
  rectangle: {
    backgroundColor: '#F8F6F7',
    height: '40%',
    width: '100%',
    position: 'absolute',
    top: '45vh',
    zIndex: -1,
  },
  WhyChooseUs: {
    position: 'relative',
    height: '93vh',
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
});

const About = () => {
  const classes = useStyles();
  const aboutMessage = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

  return (
    <div id='aboutpage'>
      <div className={classes.aboutPage}>
        <h1>About Us</h1>
        <p>{aboutMessage}</p>
        <AdvancedImage
          cldImg={coverEyesGirl}
          style={{
            width: '135%',
            position: 'absolute',
            bottom: 0,
            left: '-19vw',
          }}
        />
      </div>
      <div className={classes.WhyChooseUs}>
        <h1>Why Choose Us?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </p>
        <AdvancedImage
          cldImg={nailBottles}
          style={{
            width: '135%',
            position: 'absolute',
            bottom: '0',
            left: '-19vw',
          }}
        />
        <div className={classes.rectangle} />
      </div>
      <div className={classes.testimonial}>
        <h1>Testimonial</h1>
        <Carousel>
          {testimonial.map((item, i) => (
            <Paper classes={{ root: classes.container }} key={i}>
              <p>{item.message}</p>
              <h2>{item.name}</h2>
            </Paper>
          ))}
        </Carousel>
      </div>
      <Contact />
    </div>
  );
};

export default About;
