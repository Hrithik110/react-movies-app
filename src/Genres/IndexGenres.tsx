import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { genreDTO } from '../movies/genre.model'
import { urlGenres } from '../endpoints'
import GenericList from '../utils/GenericList'
import Button from '../utils/Button'

const IndexGenres = () => {

  const[genres, setGenres] = useState<genreDTO[]>();
  const[sortedGenres, setSortedGenres]= useState<genreDTO[]>();
  useEffect(()=>{
    axios.get(urlGenres)
    .then((response: AxiosResponse<genreDTO[]>)=>{
      setGenres(response.data);
    })
    .catch(e=>{
      console.error(e);
    })
  },[])

  useEffect(()=>{
    setSortedGenres(genres?.sort((a:genreDTO,b:genreDTO)=>a.name.localeCompare(b.name)));
  },[genres])

  return (
    <div>
      <h1>Genres</h1>
      <Link className='btn btn-primary' to="/genres/create"> Create genres </Link>

      <GenericList list={genres}>
        <table className='table table-striped'>
          <thead className='thead-dark'>
            <tr>
            <th scope='col'></th>
            <th scope='col'>Name</th>
            </tr>
          
          </thead>
          <tbody>
          {sortedGenres?.map(genre=> <tr key={genre.id}>
            <td>
              <Link className='btn btn-success' to={`/genres/edit/${genre.id}`}>Edit</Link>
              <Button className='btn btn-danger'>Delete</Button>
            </td>
            <td>{genre.name}</td>
          </tr>)}
          </tbody>
          
        </table>
      </GenericList>
    </div>
  )
}

export default IndexGenres
