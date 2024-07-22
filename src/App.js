import './style.css'
import React, { useState } from 'react';

export default function App() {

  console.log("App()")

  const [tarefas, setTarefas] = useState(["Estudar CSS", "Estudar JS", "Estudar HTML", "Estudar React"])
  const [nova, setNova] = useState("")
  const [edicao, setEdicao] = useState({ index: -1, texto: "" });

  function adicionar(e) {
    e.preventDefault()
    if(nova.trim() !== ""){
      setTarefas([...tarefas, nova])
      setNova("");
    }
  }

  function editar(index) {
    const novasTarefas = [...tarefas];
    novasTarefas[index] = edicao.texto;
    setTarefas(novasTarefas);
    setEdicao({ index: -1, texto: "" });
  }
  
  function deletar(i) {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(i, 1);
    setTarefas(novasTarefas);
  }
  
  function subir(i) {
    if(i > 0) {
      const novasTarefas = [...tarefas];
      [novasTarefas[i], novasTarefas[i - 1]] =
      [novasTarefas[i - 1], novasTarefas[i]];
      setTarefas(novasTarefas);
    }
  }

  function descer(i) {
    if(i < tarefas.length - 1) {
      const novasTarefas = [...tarefas];
      [novasTarefas[i], novasTarefas[i + 1]] =
      [novasTarefas[i + 1], novasTarefas[i]];
      setTarefas(novasTarefas);
    }
  }

  function handleKeyPress(e, index) {
    if (e.key === 'Enter') {
      editar(index);
    }
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
          onChange={e => setNova(e.target.value)} 
        />
        <button className='adicionar'>
          add
        </button>
      </form>
      <ul>
        {tarefas.map((tarefa, index)=> (
          <li key={index}>
            {index === edicao.index ? (
              <div>
                <input
                  type='text'
                  value={edicao.texto}
                  onChange={e => setEdicao({ ...edicao, texto: e.target.value })}
                  onKeyDown={e => handleKeyPress(e, index)}
                />
                <button onClick={() => editar(index)}>Salvar</button>
              </div>
            ) : (
              <div>
                {tarefa}
                <button onClick={() => setEdicao({ index, texto: tarefa })}>Editar</button>
                <button className='botaodeletar' onClick={() => deletar(index)}>deletar</button>
                <button className='botaomover' onClick={() => subir(index)}>⬆️</button>
                <button className='botaomover' onClick={() => descer(index)}>⬇️</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
