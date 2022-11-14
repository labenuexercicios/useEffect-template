import { useState } from "react";
import React from "react";


export default function App() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const saveData = (ev) => {
    ev.preventDefault();
    console.log({ name, message })
  };

  const logData = (ev) => {
    ev.preventDefault();
    console.log({ name, message });
  };


  return (
    <>
    <h1>LocalStorage e useEffect</h1>
      <form>
        Nome:
        <br />
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <br />
        Mensagem:
        <br />
        <input
          type="text"
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
        />
        <br />
        <button onClick={saveData}>Salvar Dados</button>
        <button onClick={logData}>Logar Dados</button>
      </form>
    </>
  );
}
