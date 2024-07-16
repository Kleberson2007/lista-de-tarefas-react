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

  function deletar(i) {
    
  }
  
  function subir(i) {
    
  }

  function descer(i) {
    
  }

  function enter(event) {
    if (event.key === 'Enter') {
      adicionar();
    }
  }

  return (
    <div className='listadetarefas'>
      <header>
        <h1>Lista de tarefas</h1>
      </header>
      <div>
        <input
          type='text'
          placeholder='nome da tarefa...'
          value={nova}
          onChange={e => setNova(e.target.value)}
          onKeyDown={enter} />

        <button onClick={adicionar}>
          add
        </button>
      </div>
      <ul>
        {tarefas.map((t, i)=> 
          <li key={i}>
            {t}
            <button className='botaodeletar' onClick={deletar(i)}>deletar</button>
          </li>)}
      </ul>
    </div>
  );
}

