import React from 'react'
import { makeStyles } from '@material-ui/core';
import Gallery from 'react-photo-gallery';
import { photos } from '../utils/photos';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F8F6F7',
    height: '100%',
    padding: '20px',
  }
})

const PhotoGallery = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Gallery</h1>
      <Gallery photos={photos} />
    </div>
  )
}

export default PhotoGallery;