import React from 'react'
import { moviesDTO } from './movies.model'
import styles from "./individualMovies.module.css";

const IndividualMovies = (props: moviesDTO) => {

    const buildLink = ()=>`/movies/${props.id}`;
  return (
    <div className={styles.div}>
      <a href={buildLink()}>
        <img src={props.poster} alt="Poster" />
      </a>
      <p>
        <a href={buildLink()}>{props.title}</a>
      </p>
    </div>
  )
}

export default IndividualMovies;
