import { useState } from "react";

const Form2 = () => {
    
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    const errorMessageName = validateName(name);
    const errorMessageEmail = validateEmail(email);

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
        <p>{errorMessageEmail}</p>

        {/* Send button */}
        <button type="submit" disabled={errorMessageName + errorMessageEmail} >Enviar</button>

    </form>    
    )
}

const enviar = (name, email) => {
    // if (name === "test" && email === "name@email.com")
    alert(`Gracias ${name}, te contactaremos lo antes posible vía mail`);

    // else alert("Por favor verifique su información nuevamente")
};

const validateName = (name) => {
    if(name.length < 5)
    return "El nombre debe ser mayor de 5 caracteres"   
}

const validateEmail = (email) => {
    if(!email.includes('@')) 
    return "Email incorrecto"
    
}

export default Form2;