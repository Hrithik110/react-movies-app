import { Field } from 'formik'
import React from 'react'

const CheckBoxField = (props:checkFieldProps) => {
  return (
    <div className='mb-3 form-check'>
      <Field className='form-check-input' type='checkbox' id={props.field} name={props.field}/>
      <label htmlFor={props.field}>{props.displayName}</label>
    </div>
  )
}
interface checkFieldProps{
    displayName: string;
    field: string;
}
export default CheckBoxField
