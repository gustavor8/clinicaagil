import React from 'react';

function Menu({ setView }) {

  function closeWindow(){
    localStorage.clear();
    window.close();
  }
  return (
    <div>
      <h1>Consultas Clínica</h1>
      <button onClick={() => setView('cadastrar')}>Cadastrar Paciente</button>
      <button onClick={() => setView('marcar')}>Marcar Consulta</button>
      <button onClick={() => setView('cancelar')}>Cancelar Consulta</button>
      <button onClick={() => closeWindow()}>Sair</button>
    </div>
  );
}

export default Menu;
