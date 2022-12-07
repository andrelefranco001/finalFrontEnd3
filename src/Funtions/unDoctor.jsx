import React from 'react'
import axios from 'axios';

const unDoctor = async (id, state) => {

    const response =  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    state(response.data);

  return (
    <div>unDoctor</div>
  )
}

export default unDoctor

