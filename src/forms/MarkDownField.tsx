import { Field, useFormikContext } from 'formik';
import React from 'react'
import ReactMarkdown from 'react-markdown';
import './markdownField.css'
const MarkDownField = (props: markDownFieldProps) => {

    const {values} = useFormikContext<any>();

  return (
    <div className='mb-3 form-markdown'>
        <div>
            <label htmlFor="">{props.displayName}</label>
            <div>
                <Field name={props.field} as='textarea' className='form-textarea'>

                </Field>
            </div>
        </div>

        <div>
            <label htmlFor="markdown">{props.displayName} (preview):</label>
            <div className='markdown-container'>
                <ReactMarkdown>{values[props.field]}</ReactMarkdown>

            </div>
        </div>
    </div>
  )
}

interface markDownFieldProps{
    displayName: string;
    field: string;
}

export default MarkDownField
