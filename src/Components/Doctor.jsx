import doctorimg from '../Assets/doctor.jpg'
import Detail from '../Routes/Detail';

 

function Doctor({doctors}) {

    const addFav = ()=>{
        // Aqui iria la logica para agregar la Card en el localStorage
      }

  return (
    <div className='row'>
    <div className='card-deck' >
        <div class="card-header">
        <img class="img-fluid rounded" src={doctorimg} alt=""/>
        </div>

        <div class="card-body">
        <p class="card-text">ID Doctor: {doctors.id}</p>
        <h5 className='card-title'>{doctors.name}</h5>
        <p class="card-text">User Name: {doctors.username}</p>
        <a type="button" class="btn btn-primary btn-sm" href={`/dentist/${doctors.id}`}>Details</a>
        <button onClick={addFav} className="btn btn-primary btn-sm">⭐</button>
        </div>
        </div>

    </div>
  )
}

export default Doctor