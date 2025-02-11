import React from 'react'

const DisplayErrors = (props: displayErrorsProps) => {
  const style = {color: "red"};
  return (
    <div>
      {props.errors? <ul style={style}>
        {props.errors.map((error, index)=>
          <li key={index}>{error}</li>
        )}
      </ul>:null}
    </div>
  )
}
interface displayErrorsProps{
  errors?:string[];
}

export default DisplayErrors
