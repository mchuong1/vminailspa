import React from 'react';
import { makeStyles, Button, Paper } from '@material-ui/core';
import { AdvancedImage } from '@cloudinary/react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import {
  manicure,
  pedicure,
  massage,
  smileGirl,
  coverEyesGirl,
  nailBottles,
  // photos,
} from '../utils/photos';
import { testimonial } from '../utils/testimonial';

const useStyles = makeStyles(() => ({
  landingSection: {
    backgroundColor: '#F8F6F7',
    zIndex: -1,
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
      top: '46vh',
    },
  },
  rectangle: {
    backgroundColor: '#F8F6F7',
    height: '40%',
    width: '100%',
    position: 'absolute',
    top: '25vh',
    zIndex: -1,
  },
  services: {
    height: 'fit-content',
    padding: '20px',
    backgroundColor: '#F8F6F7',
    '& h1': {
      fontSize: '53px',
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
      top: '28vh',
      padding: '20px',
      width: '190px',
    },
    '& button': {
      position: 'absolute',
      marginLeft: '5px',
      top: '53vh',
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
  testimonialContainer: {
    padding: '20px',
    backgroundColor: '#F8F6F7',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  // const { history } = props;

  const serviceDescription = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

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
      <div className={classes.landingSection}>
        <div className={classes.landingMessage}>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <Button variant='contained' classes={{ root: classes.button }}>
            Book Now
          </Button>
        </div>
        <AdvancedImage
          cldImg={smileGirl}
          style={{ width: '180%', position: 'absolute', bottom: 0, left: 0 }}
          alt='Beautiful Girl Smile Brunette Nails'
        />
        <div className={classes.circle} />
      </div>
      <div className={classes.aboutSection}>
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button variant='contained' classes={{ root: classes.button }}>
          Read More
        </Button>
        <AdvancedImage
          cldImg={coverEyesGirl}
          style={{
            width: '130%',
            right: '-20vh',
            bottom: '31vh',
            position: 'absolute',
          }}
        />
        <div className={classes.rectangle} />
      </div>
      <div className={classes.services}>
        <h1>Our Services</h1>
        <ServiceCard
          title='Manicure'
          description={serviceDescription}
          image={manicure}
        />
        <ServiceCard
          title='Pedicure'
          description={serviceDescription}
          image={pedicure}
        />
        <ServiceCard
          title='Massage'
          description={serviceDescription}
          image={massage}
        />
        <Button variant='contained' classes={{ root: classes.button }}>
          View More
        </Button>
      </div>
      <div className={classes.WhyChooseUs}>
        <h1>Why Choose Us?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </p>
        <Button variant='contained' classes={{ root: classes.button }}>
          View More
        </Button>
        <AdvancedImage
          cldImg={nailBottles}
          style={{
            width: '120%',
            position: 'absolute',
            bottom: '22vh',
            left: '23vw',
          }}
        />
        <div className={classes.rectangle} />
      </div>
      <div className={classes.testimonial}>
        <h1>Testimonial</h1>
          <Carousel>
          {testimonial.map((item, i) => (
            <Paper classes={{root: classes.testimonialContainer}}  key={i}>
              <p>{item.message}</p>
              <h2>{item.name}</h2>
            </Paper>
          ))}
          </Carousel>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(LandingPage);
