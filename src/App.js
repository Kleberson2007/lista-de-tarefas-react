import './style.css'
import React from 'react';

const tarefas = ["estudar HTML", "estudar CSS", "estudar JS"]

export default function App() {
  return (
    <div className='listadetarefas'>
      <header>
        <h1>Lista de tarefas</h1>
      </header>
      <main>
        <ul>{tarefas}</ul>        
      </main>
      <footer>
        <input></input>
        <button onClick="add">adicionar</button>
      </footer>
    </div>
  );
}

