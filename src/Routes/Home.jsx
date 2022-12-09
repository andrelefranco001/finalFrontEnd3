import React, { useState } from 'react'
import App2 from '../App2'
import Card from '../Components/Card'
import DoctorList from '../Components/DoctorList'
import Navbar from '../Components/Navbar'
import Favs from './Favs'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [doc,setDoc] = useState([])

    const handleClick = (item) =>{
      let isPresent = false;
      doc.forEach((doctors) => {
        if (item.id === doctors.id)
        isPresent = true;
      })
      if(isPresent)
      return;
      setDoc([...doc, item]);

    }
  

  return (
    
    <main className="" >
      <h1 className='text-center display-4 py-4'>Listado de doctores</h1>
      <div> 
          <DoctorList handleClick={handleClick}/>
          {/* <Favs doc={doc} setDoc={setDoc}/>        */}
    </div>
    </main>
  )
}

export default Home