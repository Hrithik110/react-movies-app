import React from 'react'
import MovieTheatreForm from './MovieTheatreForm'

const EditMovieTheatre= () => {
  return (
    <>
      <h3>Edit Movie Theatre</h3>
      <MovieTheatreForm model={{name:'Theatres',
        latitude:28.680620291589037,
        longitude:76.93038940429689
      }}
     onSubmit={values=> console.log(values)}/>
    </>
  )
}

export default EditMovieTheatre
