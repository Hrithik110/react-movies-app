import React from 'react'
import { useParams, Navigate } from 'react-router-dom';
import GenreForm from './GenreForm';

const EditGenre = () => {

  const {id}: any = useParams();

 
  return (
    <>
      <h3>Edit Genre</h3>
      <GenreForm model={{name: 'Action'}}
            onSubmit = {async (values, { setSubmitting }) => {
                await new Promise(r=> setTimeout(r, 3000));
                console.log(values); // Save to the database
                console.log(id); 
                setSubmitting(false); // Reset form submission state
              }}
            />
    </>
  )
}

export default EditGenre
