import React from 'react';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import { AdvancedImage } from '@cloudinary/react';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5rem 0',
  },
  rectangle: {
    backgroundColor: '#F8F6F7',
    width: '100%',
    zIndex: -1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& h2': {
      margin: '60px 20px',
      alignSelf: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      '& h2': {
        margin: '0 auto',
      },
    },
  },
  img: {
    width: '376px',
    height: '260px',
    [theme.breakpoints.up('sm')]: {
      width: '700px',
      height: '500px',
    },
  },
}));

const WhySection = (props) => {
  const classes = useStyles();
  const { description, img, right } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      {!isDesktop && (
        <div className={classes.rectangle}>
          <h2>{description}</h2>
          <AdvancedImage cldImg={img} className={classes.img} />
        </div>
      )}
      {isDesktop &&
        (right ? (
          <div className={classes.rectangle}>
            <h2>{description}</h2>
            <AdvancedImage cldImg={img} className={classes.img} />
          </div>
        ) : (
          <div className={classes.rectangle}>
            <AdvancedImage cldImg={img} className={classes.img} />
            <h2>{description}</h2>
          </div>
        ))}
    </div>
  );
};

WhySection.propTypes = {
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  right: PropTypes.bool,
};

WhySection.defaultProps = {
  right: false,
};

export default WhySection;
