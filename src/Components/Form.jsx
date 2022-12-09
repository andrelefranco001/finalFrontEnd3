import { useState } from "react";

const Form = () => {
    
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[consulta, setConsulta] = useState('');

    const errorMessageName = validateName(name);
    const errorMessageEmail = validateEmail(email);
    const okMessage = validateNameEmailOk(name, email);
    

    return (
        
    <form
            id="Formulario"
            onSubmit={ev => {
            ev.preventDefault();
            enviar(name, email, consulta); 
        }}>      
        

        <input 
        type='text'
        name="nombre"
        placeholder="Nombre completo"
        value={name}
        onChange={ev => setName(ev.target.value)}
        ></input>

        {/* Error message for Name */}
        <p>{errorMessageName}</p>
        
        <input 
        type='text'
        name="email"
        placeholder="Email"
        value={email}
        onChange={ev => setEmail(ev.target.value)}
        ></input>

        {/* Error message for Email */}
        <p>{errorMessageEmail}{okMessage}</p>

        <input 
         
        type='text'
        name="consulta"
        placeholder="Consulta"
        value={consulta}
        onChange={ev => setConsulta(ev.target.value)}
        ></input>

        <div style={{display: 'flex', justifyContent: 'center'}}>
        {/* Send button */}
        <button id="DetButton" type="submit" class="btn btn-primary" disabled={errorMessageName + errorMessageEmail} >Enviar</button>
        </div>
    

    </form>    
    )
}

const enviar = (name) => {
    alert(`Gracias ${name}, nos contactaremos lo antes posible vía mail`);
    
};

const validateName = (name) => {
    
    if(name.length <= 4){
      return "⚠️ El nombre debe ser mayor de 5 caracteres";
    }    
}

const validateEmail = (email) => {
    if(!email.includes('@'))
    return "⚠️ Email debe tener el formato correcto, debe contener un caracter '@'"
    
}

const validateNameEmailOk = (name, email) => {
    if(name.length >= 5 && email.includes('@')){
      return '🟢 Datos validados';
    }
    
}




export default Form;