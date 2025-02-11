import React from 'react'
import ActorForm from './ActorForm'


const CreateActor = () => {
  return (
    <>
      <h3>Create Actor</h3>
     <ActorForm model={{name:'', dateOfBirth: undefined}}
     onSubmit = {async (values, { setSubmitting }) => {
      await new Promise(r=> setTimeout(r, 3000));
      console.log(values); // Save to the database
      setSubmitting(false); // Reset form submission state
    }}
     />
    </>
  )
}

export default CreateActor
