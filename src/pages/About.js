import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { AdvancedImage } from '@cloudinary/react';
import Carousel from 'react-material-ui-carousel';
import { coverEyesGirl, nailBottles } from '../utils/photos';
import { testimonial } from '../utils/testimonial';
import Contact from '../components/Contact';

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
        fontWeight: 400
      },
      '& p': {
        fontSize: '32px',
        position: 'absolute',
        right: 0,
        width: '1000px'
      }
    }
  },
  coverEyesGirl: {
    width: '135%',
    position: 'absolute',
    bottom: 0,
    left: '-19vw',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      left: '-9vw'
    }
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
      top: '26vh'
    }
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
    [theme.breakpoints.up('sm')]: {
      '& h1': {
        fontSize: '100px',
        margin: 0,
        left: '5vw',
        fontWeight: 400
      },
      '& p': {
        fontSize: '32px',
        top: '24vh',
        width: '505px',
        left: '5vw'
      },
    }
  },
  nailBottles: {
    width: '135%',
    position: 'absolute',
    bottom: '0',
    left: '-19vw',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      bottom: '-9vh',
      left: '45vw'
    }
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
  const aboutMessage = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </p>
        <AdvancedImage
          cldImg={nailBottles}
          className={classes.nailBottles}
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
