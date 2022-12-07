import React from 'react'
import App2 from '../App2'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1 className='text-center disply-1 py-4'>Home</h1>
      {/* <Card /> */}
      <App2 />
    </main>
  )
}

export default Home