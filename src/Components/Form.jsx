import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  //Validation menssage
  // const [message, setMessage] = useState("");

  //Se crea un manejador de eventos para cada input
  const onChageUserName = (e) => setUserName(e.target.value);
  const onChageUserEmail = (e) => setUserEmail(e.target.value);

  //Manejador para el evento onSubmit
  const onSubmitForm = (e) => {
    e.preventDefault();
    alert(`Gracias ${userName} te contactaremos cuando antes vía mail`)
  };
  
  const validateUserName = (userName) => {
    //Eliminación de espacios en blanco
    const withoutSpaces = userName.trim();

    //Validación de la extensión
    if (withoutSpaces.length > 5) {
      return true;
    }else {
      return false;
    }
  };

//  const validateUserEmail = (userEmail) => {
//   const regEx= /[a-zA-Z0-9._%+-] + @[a-z0-9.-]+\.[a-z]{2,8}(.[a-z]{2,8})?/g

//   if(regEx.test(userEmail)){
//     setMessage("El Email es valido");
//   }else if (!regEx.test(userEmail) && userEmail != ""){
//     setMessage("El Email no es valido")
//   }else{
//     setMessage("");
//   }
//  }

  const isUsernameValid = validateUserName(userName);
  // const isUserEmail = validateUserEmail(userEmail);


  return (
    <div className="App">
      <form onSubmit={onSubmitForm}>

      <input
        type="text"
        placeholder="Nombre completo"
        value={userName}
        onChange={onChageUserName}
        autoComplete="off"
        />

      <input
        type="email"
        placeholder="Email"
        value={userEmail}
        onChange={onChageUserEmail}
        autoComplete='off'
        />

      {/* Botón de Enviar */}
      <button type="submit">Enviar</button>
      {/* {message}; */}
      </form>
    </div>
  );
};

export default Form;
