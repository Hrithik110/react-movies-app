import React, { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenreForm from './GenreForm';
import { genreCreationDTO } from './genres.model';
import axios from 'axios';
import { urlGenres } from '../endpoints';
import DisplayErrors from '../utils/DisplayErrors';

const CreateGenre = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState<string[]>([]);
    const handleSubmit = async(genre:genreCreationDTO)=>{

        try{
            await axios.post(urlGenres, genre);
            navigate('/genres');
        }
        catch(e){
            
            if(e && e.response){
                setErrors(e.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create Genre</h3>
            <DisplayErrors errors={errors}/>
            <GenreForm model={{name: ''}}
            onSubmit = {async (value, { setSubmitting }) => {
                await handleSubmit(value)
                setSubmitting(false); // Reset form submission state
              }}
            />
            
          
        </>
    );
};

export default CreateGenre;
