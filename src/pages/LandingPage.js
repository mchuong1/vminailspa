import React from 'react';
import { makeStyles, Button, Paper } from '@material-ui/core';
import { AdvancedImage } from '@cloudinary/react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
// import Carousel from 'react-material-ui-carousel';
import { Fade } from 'react-reveal';
import {
  manicure,
  pedicure,
  massage,
  coverEyesGirl,
  nailBottles,
  // carousel,
} from '../utils/photos';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonial';

const useStyles = makeStyles((theme) => ({
  landingSection: {
    backgroundColor: 'black',
    zIndex: 1,
    position: 'relative',
    height: '93vh',
    overflow: 'hidden',
  },
  landingMessage: {
    padding: '20px',
    position: 'absolute',
    top: '7vh',
    '& h1': {
      fontSize: '53px',
      color: 'white',
      fontWeight: 400,
    },
    '& p': {
      color: 'white',
    },
    [theme.breakpoints.up('sm')]: {
      width: '639px',
      left: '8vw',
      '& h1': {
        fontSize: '100px',
        margin: 0,
      },
      '& p': {
        fontSize: '32px',
      },
    },
  },
  landingCarousel: {
    zIndex: -1,
    '& CarouselItem': {
      height: '93vh',
    },
  },
  carouselImg: {
    width: '100vh',
    height: '100vh',
    opacity: '0.6',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  smileGirl: {
    width: '180%',
    position: 'absolute',
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
      right: '-11vw',
      width: '60%',
    },
  },
  circle: {
    borderRadius: '50%',
    zIndex: '-1',
    backgroundColor: 'white',
    height: '85vh',
    width: '85vh',
    top: '4vh',
    right: '-36vw',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      right: '7vw',
    },
  },
  button: {
    backgroundColor: '#FB9475',
    color: 'white',
    borderRadius: '50px',
  },
  aboutSection: {
    height: '93vh',
    position: 'relative',
    '& h1': {
      position: 'absolute',
      fontSize: '53px',
      paddingLeft: '20px',
      fontWeight: 400,
    },
    '& p': {
      position: 'absolute',
      top: '25vh',
      padding: '20px',
      width: '190px',
    },
    '& button': {
      position: 'absolute',
      marginLeft: '5px',
      top: '55vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      '& h1': {
        fontSize: '100px',
        right: '18vw',
        margin: 0,
      },
      '& p': {
        fontSize: '32px',
        width: '505px',
        right: '3vw',
        top: '20vh',
      },
      '& button': {
        top: '65vh',
        right: ' 30vw',
      },
    },
  },
  coverEyesGirl: {
    width: '130%',
    right: '-20vh',
    bottom: '31vh',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      left: '12vw',
      top: '11vh',
    },
  },
  rectangle: {
    backgroundColor: '#AED6F1',
    height: '40%',
    width: '100%',
    position: 'absolute',
    top: '25vh',
    zIndex: -1,
    [theme.breakpoints.up('sm')]: {
      height: '50%',
      width: '80%',
    },
  },
  services: {
    height: 'fit-content',
    padding: '20px',
    backgroundColor: '#AED6F1',
    '& h1': {
      fontSize: '53px',
      fontWeight: 400,
    },
    [theme.breakpoints.up('sm')]: {
      '& button': {
        marginLeft: '35px',
      },
    },
  },
  servicesContainer: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '20px',
      justifyContent: 'space-evenly',
    },
  },
  serviceCard: {
    '& h1': {
      paddingLeft: '20px',
      fontSize: '30px',
    },
    '& p': {
      padding: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '30%',
    },
  },
  WhyChooseUs: {
    position: 'relative',
    height: '93vh',
    '& h1': {
      position: 'absolute',
      fontSize: '53px',
      paddingLeft: '20px',
      fontWeight: 400,
    },
    '& p': {
      position: 'absolute',
      top: '28vh',
      padding: '20px',
      width: '190px',
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
      },
      '& p': {
        fontSize: '32px',
        top: '24vh',
        width: '505px',
        left: '5vw',
      },
      '& button': {
        top: '63vh',
        left: '5vw',
      },
    },
  },
  nailBottles: {
    width: '120%',
    position: 'absolute',
    bottom: '22vh',
    left: '23vw',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
      bottom: '0vh',
      left: '54vw',
    },
  },
  carousel: {
    height: '72%',
    '& div': {
      height: '100%',
    },
    '& div div': {
      height: '100%',
    },
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: '10% !important',
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
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const { history } = props;

  const manicureDescription = `Includes nail trimming and shaping, cuticle grooming, buffing, a lotion massage, hot towel service, and finished with your choice of color.`;
  const pedicureDescription = `Includes nail trimming and shaping, cuticle grooming, buffing, a lotion massage, hot towel service, and finished with your choice of color.`;
  const serviceDescription = `Jelly pedi is an unique spa pedicure treatment, that incorporates jelly into an ordinary pedicure treatment for the ultimate luxurious pedicure experience. Jelly holds water temperature 4 times longer than water, ideal for spa. 10 minutes foot soak with Jelly, followed our Deluxe pedicure. (Speical neck wrap relaxation)`;

  const ServiceCard = ({ title, description, image }) => (
    <Paper classes={{ root: classes.serviceCard }}>
      <AdvancedImage cldImg={image} style={{ width: '100%' }} />
      <h1>{title}</h1>
      <p>{description}</p>
    </Paper>
  );

  ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({}).isRequired,
  };

  return (
    <div id='landingpage'>
      <div style={{ overflow: 'hidden' }}>
        <div className={classes.landingSection}>
          <iframe
            id='virtualTourFrame'
            title='Virtual Tour Frame'
            src='http://vnmispa.com'
            className={classes.iframe}
          />
          {/* <div className={classes.landingMessage}>
            <Fade bottom>
              <h1>Welcome</h1>
            </Fade>
            <Fade bottom delay={500}>
              <p>
                We are a spa salon that specializes in nail art, pedicure, and
                more.
              </p>
            </Fade>
            <Fade bottom delay={1000}>
              <Button
                variant='contained'
                classes={{ root: classes.button }}
                onClick={() => history.push('/Booking')}
              >
                Book Now
              </Button>
            </Fade>
          </div> */}
          {/* <Carousel
            classes={{ root: classes.landingCarousel }}
            animation='slide'
            timeout={800}
            indicators={false}
          >
            {carousel.map((image, i) => (
              <AdvancedImage
                key={i}
                cldImg={image.src}
                className={classes.carouselImg}
              />
            ))}
          </Carousel> */}
        </div>
        <div className={classes.aboutSection}>
          <Fade top>
            <h1>About Us</h1>
          </Fade>
          <Fade right delay={1000}>
            <p>
              We take customer satisfaction as our pride. We try our level best
              to make the customer experience simply the best. We make sure
              every single product we use is of great quality.
            </p>
            <Button
              variant='contained'
              classes={{ root: classes.button }}
              onClick={() => history.push('/About')}
            >
              Read More
            </Button>
            <AdvancedImage
              cldImg={coverEyesGirl}
              className={classes.coverEyesGirl}
            />
            <div className={classes.rectangle} style={{ right: 0 }} />
          </Fade>
        </div>
        <div className={classes.services}>
          <Fade top>
            <h1>Our Services</h1>
          </Fade>
          <Fade bottom delay={500}>
            <div className={classes.servicesContainer}>
              <ServiceCard
                title='Manicure'
                description={manicureDescription}
                image={manicure}
              />
              <ServiceCard
                title='Pedicure'
                description={pedicureDescription}
                image={pedicure}
              />
              <ServiceCard
                title='Jelly Spa Pedicure'
                description={serviceDescription}
                image={massage}
              />
            </div>
          </Fade>
          <Fade bottom delay={500}>
            <Button
              variant='contained'
              classes={{ root: classes.button }}
              onClick={() => history.push('/Service')}
            >
              View More
            </Button>
          </Fade>
        </div>
        <div className={classes.WhyChooseUs}>
          <h1>Why Choose Us?</h1>
          <p>
            What can we create for you, how can improve or maintain you current
            look? We always learning something fresh and new while keeping with
            today&apos;s trends.
          </p>
          <Button
            variant='contained'
            classes={{ root: classes.button }}
            onClick={() => history.push('/About')}
          >
            View More
          </Button>
          <AdvancedImage cldImg={nailBottles} className={classes.nailBottles} />
          <div className={classes.rectangle} />
        </div>
        <Testimonials />
      </div>
      <Contact />
    </div>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(LandingPage);
