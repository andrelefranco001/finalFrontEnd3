import React from 'react'
import Form from '../Components/Form'
import Form2 from '../Components/Form2'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form2 />
    </div>
  )
}

export default Contact