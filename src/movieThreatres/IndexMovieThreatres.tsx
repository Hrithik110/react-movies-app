import React from 'react'
import { Link } from 'react-router-dom'

const IndexMovieTheatres = () => {
  return (
    <>
      <h3>Movie Theaters</h3>
     <Link className='btn btn-primary' to='/moviethreatres/create'> Create Movie Theater </Link>
    </>
  )
}

export default IndexMovieTheatres
