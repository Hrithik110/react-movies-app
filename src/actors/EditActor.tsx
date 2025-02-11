import React from 'react'
import ActorForm from './ActorForm'

const EditActor= () => {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm model={{name:'Tom Holland',
      biography: `# Something
      This is Dr. Strange from **New York**
      `,
      dateOfBirth: new Date('1996-06-01T00:00:00'),
      pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/440px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
    }}
     
      onSubmit={(values, {setSubmitting})=>{
      console.log(values)
      setSubmitting(false)
     }}
     />
    </>
  )
}

export default EditActor
