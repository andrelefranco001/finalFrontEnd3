import React, {useEffect,useState} from 'react'
import Doctor from './Doctor';


function DoctorList({handleClick}) {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        async function fetchData() {             
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setDoctors(data);
        }

        fetchData()
    }, []);

  return (
    <div className='container '>
        <div className='row'>
        {
            doctors.map(doctors => {
                return (
                    <div className='col-md-3' key={doctors.id}>
                    <Doctor doctors={doctors} key={doctors.id} handleClick={handleClick}/>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default DoctorList