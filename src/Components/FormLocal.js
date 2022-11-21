import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);

  const saveData = () => {
    localStorage.setItem("user", nome);
  };

  const loadData = () => {
   const nomeLoad = localStorage.getItem("user");
   setNome(nomeLoad);
  };

  const atualizarLista = () => {
    setListaTarefa([tarefa,...listaTarefa])
  }

  const saveLista = () => {
    const stringficado = JSON.stringify(listaTarefa)
    localStorage.setItem("tarefas", stringficado)
  }

  const loadLista = () => {
    const paseado = JSON.parse(localStorage.getItem("tarefas"))
    setListaTarefa(paseado)
  }

  useEffect(() =>{
    if(nome !== "") {
      console.log("renderizou useEffect NOME")
      localStorage.setItem("user", nome)
    }
  }, [nome])


  useEffect(() => {
    const stringficado = JSON.stringify(listaTarefa)
    localStorage.setItem("tarefas", stringficado)
  },[listaTarefa])


  return (
    <Form>
      <h3>Prática 1</h3>
      <label htmlFor="nome">
        nome:
        <input name="nome" id="nome" value={nome} onChange={(event) => setNome(event.target.value)}/>
      </label>
      <div>
        <button onClick={saveData}>Guardar Dados</button>
        <button onClick={loadData}>Acessar Dados</button>
      </div>
      <br />
      <h3>Prática 2</h3>
      <label htmlFor="tarefa">
        tarefa:
        <input name="tarefa" id="tarefa" value={tarefa} onChange={(event) => setTarefa(event.target.value)}/>
      </label>
      <button type="button" onClick={atualizarLista}>adicionar Tarefa</button>
      <ul>
        {listaTarefa.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
      <div>
        <button onClick={saveLista}>Guardar tarefa</button>
        <button onClick={loadLista}>Acessar tarefa</button>
      </div>
    </Form>
  );
}
