import React from 'react'
import movieTheatreDTO from './movieTheatres.model'
import { Form, Formik, FormikHelpers } from 'formik'
import TextField from '../forms/TextField'
import Button from '../utils/Button'
import { Link } from 'react-router-dom'
import movieTheatreCreationDTO from './movieTheatres.model'
import * as Yup from 'yup'
import Map from '../utils/Map'
import MapField from '../forms/MapField'
import { transform } from 'typescript'
import { coordinatesCreationDTO } from '../utils/coordinates.model'

const MovieTheatreForm = (props: movieTheatreFormProps) => {

    function transformCoordinated():coordinatesCreationDTO[]|undefined{
        if(props.model.latitude && props.model.longitude){
            const response: coordinatesCreationDTO = {
                lat: props.model.latitude,
                lng: props.model.longitude
            }
            return [response]
        }
        return undefined
    }
  return (
   <Formik
   initialValues={props.model}
   onSubmit={props.onSubmit}

   validationSchema={
   Yup.object({
    name:Yup.string().required(`This Field is required`).firstLetterUppercase()}) 
   }
   >

    {(formikProps)=>(
        <Form>
            <TextField displayName='Name' field='name'/>
            <div style={{marginBottom: '1rem'}}>
            <MapField latField='latitude' lngField='longitude'
            coordinates={transformCoordinated()}
            />
            </div>
            <Button type='submit' disabled={formikProps.isSubmitting}>Save Changes</Button>

            <Link to='/movieTheatres' className='btn btn-secondary'>Cancel</Link>
        </Form>
    )}

    </Formik>
  )
}

interface movieTheatreFormProps{
    model: movieTheatreCreationDTO;
    onSubmit(values: movieTheatreCreationDTO, action: FormikHelpers<movieTheatreCreationDTO>):void
}

export default MovieTheatreForm
