import React from 'react';
import {
  Paper,
  TextField,
  Button,
  makeStyles,
  Snackbar,
  IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { sendGetInTouchEmail } from '../service/emailService';

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
      justifyContent: 'space-between',
    },
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

const validationSchema = yup.object({
  name: yup.string('Enter your Name.').required('Name is required.'),
  email: yup
    .string('Enter your Email.')
    .email('Email must be a valid Email')
    .required('Email is required.'),
  message: yup.string('Enter your Message.').required('Message is required.'),
});

const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hasError, setError] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (values) => {
    setError(false);
    try {
      await sendGetInTouchEmail(values);
      setOpen(true);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => handleSubmit(values).then(formik.resetForm()),
  });

  return (
    <div className={classes.contact}>
      <h1>Contact Us</h1>
      <Paper classes={{ root: classes.container }}>
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
          <form onSubmit={formik.handleSubmit}>
            <TextField
              classes={{ root: classes.input }}
              variant='outlined'
              id='name'
              name='name'
              label='Name'
              size='small'
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              classes={{ root: classes.input }}
              variant='outlined'
              id='email'
              name='email'
              label='Email'
              size='small'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Button
              varriant='contained'
              type='submit'
              classes={{ root: classes.button }}
            >
              Submit
            </Button>
          </form>
        </div>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message={!hasError ? "Email Sent Successfully!" : "Something went wrong :( Please call V&Mi Nail Spa."}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default Contact;
