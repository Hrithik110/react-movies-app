import React from 'react'
import MovieTheatreForm from './MovieTheatreForm'


const CreateMovieTheatre = () => {
  return (
    <>
      <h3>Create Movie Theatre</h3>
     <MovieTheatreForm model={{name:''}}
     onSubmit={values=> console.log(values)}
     />
    </>
  )
}

export default CreateMovieTheatre
