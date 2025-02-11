import { ErrorMessage, Field } from 'formik'
import React from 'react'

const TextField = (props: textFieldProps) => {
    return (
        <div className='mb-3'>
            <label htmlFor={props.field}>{props.displayName} </label>
            <Field name={props.field} id={props.field} placeholder="Enter Genre Name" className='form-control' />
            <ErrorMessage name={props.field}>{msg => <div className='text-danger'>{msg}</div>}</ErrorMessage>
        </div>
    )
}

interface textFieldProps{
    field: string;
    displayName: string;
}


export default TextField
