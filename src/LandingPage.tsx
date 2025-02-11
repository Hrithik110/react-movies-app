import React, {useState, useEffect} from 'react'
import MoviesList from './movies/MoviesList'
import { inTheatres } from './MockData/MockData';
import { upcomingReleases } from './MockData/MockData';
import { landingPageDTO } from './movies/movies.model';

const LandingPage = () => {

    const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {

    const timerId = setTimeout(() => {
      setMovies({
        inTheatre: inTheatres,
        upcomingReleases: upcomingReleases
      })
    }, 1000)

    return () => clearTimeout(timerId);
  }, [])

  return (
    <div>
       <h3>In Theatres</h3>
              <MoviesList movies={movies.inTheatre} />
              <h3>Upcoming Releases</h3>
              <MoviesList movies={movies.upcomingReleases} />
    </div>
  )
}

export default LandingPage
