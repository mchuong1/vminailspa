import React from 'react';
import { Paper, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contact: {
    padding: '20px',
    transform: 'translateY(45px)',
  },
  container: {
    padding: '20px',
    backgroundColor: '#F8F6F7',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    '& div': {
      backgroundColor: 'white',
    },
  },
  button: {
    backgroundColor: '#FB9475',
    color: 'white',
    borderRadius: '50px',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <h1>Contact Us</h1>
      <Paper classes={{root: classes.container}}>
        <div className={classes.contactContainer}>
          <h2>V&#38;Mi Nail Spa</h2>
          <p>21214 St Andrews Blvd, Boca Raton, FL 33433</p>
          <p>(561) 367-1590</p>
          <h2>Hours</h2>
          <p>Monday - Saturday: 9:30AM - 7 PM</p>
          <p>Sunday: 11 AM - 5 PM</p>
        </div>

        <div className={classes.getInTouchContainer}>
          <h1>Get In Touch</h1>
          <form>
          <TextField
            classes={{ root: classes.input }}
            variant='outlined'
            id='name'
            name='name'
            label='Name'
            size='small'
          />
          <TextField
            classes={{ root: classes.input }}
            variant='outlined'
            id='email'
            name='email'
            label='Email'
            size='small'
          />
          <TextField
            classes={{ root: classes.input }}
            variant='outlined'
            id='message'
            name='message'
            label='Message'
            size='small'
            multiline
            rows={4}
          />
          <Button
            varriant='contained'
            type='submit'
            classes={{root: classes.button}}
          >
            Submit
          </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default Contact;
