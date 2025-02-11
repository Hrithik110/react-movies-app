import React from 'react'
import MovieForm from './MovieForm'
import { genreDTO } from './genre.model'
import { movieTheatreDTO } from '../movieThreatres/movieTheatres.model'

const CreateMovie = () => {

  const nonSelectedGenres:genreDTO[] = [{id:1, name: 'Comedy'},{id:2,name:'Drama'}]
  const nonSelectedMovieTheaters:movieTheatreDTO[] = [{id:1, name: 'Delhi'},{id:2,name:'Hyderabad'}]

  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm model={{ title: '',
    inTheaters: false,
    trailer: ''
  
  }}
  onSubmit={(values, { setSubmitting })=>{
    console.log(values)
    setSubmitting(false)
  }
    
    
    }

  selectedGenres={[]}
  nonSelectedGenres={nonSelectedGenres}

  selectedMovieTheaters={[]}
  nonSelectedMovieTheaters={nonSelectedMovieTheaters}

  selectedActors={[]}
  />
    </>
  )
}

export default CreateMovie
