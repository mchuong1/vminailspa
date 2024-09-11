import React from 'react'
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  serviceNameRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10px',
    marginBottom: '10px',
    '& h3' : {
      margin: 0
    },
    '& span': {
      fontWeight: 'bold',
    }
  }
})

const Service = (props) => {

  const classes = useStyles();
  const { name, description, price } = props;

  return (
    <div className={classes.root}>
      <div className={classes.serviceNameRow}>
        <h3>{name}</h3>
        <!--<span>{price}</span>-->
      </div>
      <span>{description}</span>
    </div>
  )

}

Service.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
}

Service.defaultProps = {
  description: '',
}

export default Service;