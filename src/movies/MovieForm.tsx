import { Form, Formik, FormikHelpers } from 'formik'
import React, { useState } from 'react'
import movieTheatreCreationDTO, { movieTheatreDTO } from '../movieThreatres/movieTheatres.model'
import { moviesCreationDTO } from './movies.model'
import * as Yup from 'yup';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';
import TextField from '../forms/TextField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import CheckBoxField from '../forms/CheckBoxField';
import MultipleSelector, { multipleSelectorModel } from '../forms/MultipleSelector';
import { genreDTO } from './genre.model';
import TypeaheadActors from '../forms/TypeaheadActors';
import { actorsMovieDTO } from '../actors/actors.model';

const MovieForm = (props: movieFormProps) => {

    const[selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const[nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

    const[selectedMovieTheaters, setSelectedMovieTheaterss] = useState(mapToModel(props.selectedMovieTheaters));
    const[nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(mapToModel(props.nonSelectedMovieTheaters));

    const[selectedActors, setSelectedActors] = useState(props.selectedActors)

    function mapToModel(items: {id:number, name: string}[]):multipleSelectorModel[]{
        return items.map(item=>{
            return {key: item.id, value:item.name}
        })
    }
    return (
        <Formik
            initialValues={props.model}
            onSubmit={(values, actions)=>{

                console.log(values)
                values.genresIds = selectedGenres.map(item=>item.key)
                values.movieTheatersIds = selectedMovieTheaters.map(item=>item.key);
                props.onSubmit(values, actions);

                values.actors = selectedActors;
            }}
            validationSchema={Yup.object({
                title: Yup.string().required(`This Field is required`).firstLetterUppercase()
            })}
        >
            {(formikProps) => (
               
                <Form>
                    
                       <TextField displayName='Title' field='title'/>
                       <CheckBoxField displayName='In Theaters' field='inTheaters'/>
                       <TextField displayName='Trailer' field='trailer'/>
                       <DateField displayName='Release Date' field='releaseDate'/>
                       <ImageField displayName='Poster' field='poster'
                       imageURL={props.model.posterURL}
                       />
                     <MultipleSelector
                     displayName='Genres'
                     nonSelected={nonSelectedGenres}
                     selected={selectedGenres}
                     onChange={(selected, nonSelected)=>{
                        setSelectedGenres(selected);
                        setNonSelectedGenres(nonSelected);
                     }}
                     />
                       <MultipleSelector
                     displayName='Theaters'
                     nonSelected={nonSelectedMovieTheaters}
                     selected={selectedMovieTheaters}
                     onChange={(selected, nonSelected)=>{
                        setSelectedMovieTheaterss(selected);
                        setNonSelectedMovieTheaters(nonSelected);
                     }}
                     />
                     <TypeaheadActors
                     
                     onAdd={actors=>{
                        setSelectedActors(actors)
                     }}

                     onRemove={actor=>{
                        let updatedActors = selectedActors.filter(selActor=> selActor!==actor)

                        setSelectedActors(updatedActors);
                     }}

                     listUI={(actor: actorsMovieDTO)=>
                        <>
                        {actor.name}/<input placeholder='Character' type='text'
                        value={actor.character}
                        onChange={e=>{
                            const index = selectedActors.findIndex(a=>a.id===actor.id);
                            const actors = [...selectedActors];
                            actors[index].character = e.currentTarget.value;
                            setSelectedActors(actors)
                        }}/>
                        </>
                     }

                     displayName='Actors' actors={selectedActors}/>

                    <Button disabled={formikProps.isSubmitting}
                        type='submit'
                    >
                        Save Changes
                    </Button>
                    <Link to='/actors' className='btn btn-secondary'>Cancel</Link>

                </Form>
            )}
        </Formik>
    )
}

interface movieFormProps {
    model: moviesCreationDTO;
    onSubmit(values: moviesCreationDTO, actions: FormikHelpers<moviesCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheatreDTO[];
    nonSelectedMovieTheaters: movieTheatreDTO[];
    selectedActors: actorsMovieDTO[]

}

export default MovieForm
