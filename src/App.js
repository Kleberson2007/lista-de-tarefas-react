import './style.css'
import React, { useState } from 'react';

export default function App() {

  console.log("App()")

  const [nova, setNova] = useState("")
  const [tarefas, setTarefas] = useState(["Estudar CSS", "Estudar JS", "Estudar HTML", "Estudar React"])


  function adicionar(e) {
    e.preventDefault()
    if(nova.trim() !== ""){
    setTarefas([...tarefas, nova])
    setNova("");
    }
  }

  function deletar(i) {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(i, 1);
    setTarefas(novasTarefas);
  }
  
  function subir(i) {
    
  }

  function descer(i) {
    
  }



  return (
    <div className='listadetarefas'>
      <header>
        <h1>Lista de tarefas</h1>
      </header>
      <form onSubmit={adicionar}>
        <input
          type='text'
          placeholder='nome da tarefa...'
          value={nova}
          onChange={e => setNova(e.target.value)} />
    
        <button className='adicionar'>
          add
        </button>
      </form>
      <ul>
        {tarefas.map((tarefa, index)=> (
          <li key={index}>
            {tarefa}
            <button className='botaodeletar' onClick={() => deletar(index)}>deletar</button>
            <button className='botaomover' onClick={() => subir(index)}>⬆️</button>
            <button className='botaomover' onClick={() => descer(index)}>⬇️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

