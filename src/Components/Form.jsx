import { useState } from "react";

const Form = () => {
    
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    const errorMessageName = validateName(name);
    const errorMessageEmail = validateEmail(email);
    const okMessage = validateNameEmailOk(name, email);
    

    return (
    <form
        onSubmit={ev => {
            ev.preventDefault();
            enviar(name, email); 
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


        {/* Send button */}
        <button type="submit" disabled={errorMessageName + errorMessageEmail} >Enviar</button>

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
    return "⚠️ Email debe tener el formato correcto"
    
}

const validateNameEmailOk = (name, email) => {
    if(name.length >= 5 && email.includes('@')){
      return '🟢 Datos validados';
    }
    
}




export default Form;