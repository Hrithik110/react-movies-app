import React from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import TextField from '../forms/TextField';
import Button from '../utils/Button';
import { genreCreationDTO } from './genres.model';


const GenreForm = ( props: genreFormProps) => {
  return (
    <Formik
    initialValues={props.model}
    onSubmit={props.onSubmit}

    validationSchema={Yup.object({
        name: Yup.string().required("This is a required field.")
        .max(50,"Max Length is 50 characters.").firstLetterUppercase()
    })}
>
    {(formikProps)=>(
         <Form >
         <TextField field='name' displayName='Name:'/>

          <Button className='btn btn-primary' disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
          <Link className='btn btn-secondary' to="/genres">Cancel</Link>
      </Form>
    )}
       
  
</Formik>
  )
}

interface genreFormProps{
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}

export default GenreForm
