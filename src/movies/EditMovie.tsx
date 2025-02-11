import React from 'react'
import MovieForm from './MovieForm'
import { genreDTO } from './genre.model'
import { movieTheatreDTO } from '../movieThreatres/movieTheatres.model'

const EditMovie = () => {
  const nonSelectedGenres:genreDTO[] = [{id:1, name: 'Comedy'}]
  const selectedGenres:genreDTO[] = [{id:2,name:'Drama'}]

  const nonSelectedMovieTheaters:movieTheatreDTO[] = [{id:1, name: 'Delhi'}]
  const selectedMovieTheaters: movieTheatreDTO[] = [{id:2,name:'Hyderabad'}];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm model={{ title: 'Toy Story',
    inTheaters: true,
    trailer: 'url',
    releaseDate: new Date('2024-10-10T00:00:00'),

  }}
  onSubmit={(values,{setSubmitting})=>{console.log(values)

    setSubmitting(false)
  } }
  selectedGenres={selectedGenres}
  nonSelectedGenres={nonSelectedGenres}

  selectedMovieTheaters={selectedMovieTheaters}
  nonSelectedMovieTheaters={nonSelectedMovieTheaters}

  selectedActors={[]}
/>
    </>
  )
}

export default EditMovie
