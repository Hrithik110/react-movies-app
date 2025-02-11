import React from 'react'
import { moviesDTO } from './movies.model'
import IndividualMovies from './IndividualMovies'
import styles from './moviesList.module.css'
import Loading from '../utils/Loading'
import GenericList from '../utils/GenericList'

const MoviesList = (props: moviesListProps) => {

return <GenericList list={props.movies}>
            <div className={styles.div}>
                {props.movies?.map(movie=>(
                    <IndividualMovies {...movie} key={movie.id}/>
                ))}
              
            </div>
          
            </GenericList>
    
 
}

interface moviesListProps{
    movies?: moviesDTO[]
}

export default MoviesList
