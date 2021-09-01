import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

const useStyles = makeStyles((theme) => ({
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
    top: '95px'
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
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const { history } = props;
  const smileGirl = cld.image('VNMiNailSpa/SmileGirl');

  return (
    <div id="landingpage">
      <div className={classes.landingSection}>
        <div className={classes.landingMessage}>
          <h1>Lorem Ipsum</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
          <Button
            variant="contained"
            classes={{ root: classes.button }}
            >
            Book Now
          </Button>
        </div>
        <AdvancedImage cldImg={smileGirl} style={{ width: '180%', position: 'absolute', bottom: 0, left: 0 }} alt="Beautiful Girl Smile Brunette Nails"/>
        <div className={classes.circle}/>
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
