import './style.css'
import React, { useState } from 'react';

export default function App() {

  console.log("App()")

  const [nova, setNova] = useState("")
  const [tarefas, setTarefas] = useState(["Estudar CSS", "Estudar JS", "Estudar HTML", "Estudar React"])


  function adicionar() {
    setTarefas([...tarefas, nova])
    setNova("")
  }

  return (
    <div className='listadetarefas'>
      <header>
        <h1>Lista de tarefas</h1>
      </header>
      <input value={nova} onChange={e => setNova(e.target.value)} />
      <button onClick={adicionar}>add</button>
      <ul>
        {tarefas.map((t, i)=> <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}

