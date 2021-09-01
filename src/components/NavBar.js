import React, { useState } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#F8F6F7',
    opacity: '90%',
    zIndex: 99,
    color: 'black'
  },
  toolBar: {
    display: 'flex',
    placeContent: 'space-between',
  },
  navMenu: {
    backgroundColor: '#F8F6F7',
    height: '100vh',
    zIndex: 100,
    position: 'fixed',
    width: '100%',
    top: 0,
    transform: 'translateX(-200%)',
    transition: 'transform .2s ease-in-out',
  },
  enter: {
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
    transform: 'translateX(0%)',
  },
  exit: {
    animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  navMenuExit: {
    opacity: '0',
    backgroundColor: '#F8F6F7',
    height: '100vh',
    zIndex: 100,
    position: 'fixed',
    width: '100%',
    transform: 'translateX(-200%)',
    transition: 'all .2s ease-in-out',
    animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItems: {
    '& h2': {
      margin: 0,
      padding: '20px',
    },
    '& h2:hover': {
      cursor: 'pointer',
      backgroundColor: 'lightgrey',
    },
  },
  menuRowItems: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '50%',
    alignItems: 'center',
    '& span': {
      cursor: 'pointer',
      fontWeight: 'bold',
      '&:hover': {
        color: 'grey',
      },
    },
  },
  animatedItem: {
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
    opacity: 1,
  },
  animatedItemExiting: {
    animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
    transform: 'translateX(-200%)',
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-200%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@keyframes myEffectExit': {
    '0%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
    '100%': {
      opacity: 0,
      transform: 'translateX(-200%)',
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { history } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(true);
  const logo = cld.image('VNMINailSpa/Logo');

  const handleMenu = (prev) => {
    const nav = document.getElementById('navMenu');
    if(prev) {
      nav.classList.add(classes.enter);
    } else {
      nav.classList.add(classes.exit);
      nav.classList.remove(classes.enter);
    }
  };

  const handleClick = async () => {
    await setOpen((prev) => !prev)
    handleMenu(open)
  };

  const handleNavClick = (route) => {
    handleClick();
    history.push(route);
  };

  const handleMenuClick = (route) => {
    history.push(route);
  };

  const Navmenu = () => (
    <div
      id="navMenu"
      className={`${classes.navMenu}`}
    >
      <div className={classes.iconRow}>
        <AdvancedImage cldImg={logo} style={{ maxHeight: '100px' }} alt="Tipsy Logo"/>
        <IconButton edge='start' onClick={handleClick}>
          <ChevronLeftIcon style={{ fontSize: '2em' }} />
        </IconButton>
      </div>
      <div className={classes.menuItems}>
        <h2 onClick={() => handleNavClick('/')} aria-hidden='true'>
          Home
        </h2>
        <h2 onClick={() => handleNavClick('/About')} aria-hidden='true'>
          About Us
        </h2>
        <h2 onClick={() => handleNavClick('/Service')} aria-hidden='true'>
          Services
        </h2>
        <h2 onClick={() => handleNavClick('/OnlineBooking')} aria-hidden='true'>
          Online Booking
        </h2>
        <h2 onClick={() => handleNavClick('/Newsletter')} aria-hidden='true'>
          Virtual Tour
        </h2>
      </div>
    </div>
  );

  return (
    <>
      {/* <DrawerMenu /> */}
      <Navmenu />
      <AppBar classes={{ root: classes.appBar }} position='sticky'>
        <Toolbar classes={{ root: classes.toolBar }}>
          <AdvancedImage
            style={{ width: '100px', cursor: 'pointer' }}
            cldImg={logo}
            onClick={() => history.push('/')}
            alt="VNMi Logo"
          />
          {
            isDesktop 
            ? (<div className={classes.menuRowItems}>
                <span onClick={() => handleMenuClick('/')} aria-hidden="true">Home</span>
                <span onClick={() => handleMenuClick('/About')} aria-hidden="true">About</span>
                <span onClick={() => handleMenuClick('/Service')} aria-hidden="true">Services</span>
                <span onClick={() => handleMenuClick('/OnlineBooking')} aria-hidden="true">Online Booking</span>
                <span onClick={() => handleMenuClick('/VirtualTour')} aria-hidden="true">Newsletter</span>
              </div>)
            : (
              <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleClick}
            >
              <MenuIcon style={{ color: 'black' }}/>
            </IconButton>
            )
          }
        </Toolbar>
      </AppBar>
    </>
  );
};

Navbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Navbar.defaultProps = {};

export default withRouter(Navbar);
