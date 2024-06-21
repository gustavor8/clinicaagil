import React, { useState } from 'react';

function CadastrarPaciente({ setView, pacientes, setPacientes }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleCadastrar = () => {
    if (pacientes.some(p => p.telefone === telefone)) {
      alert('Paciente já cadastrado!');
    } else {
      const novosPacientes = [...pacientes, { nome, telefone }];
      setPacientes(novosPacientes);
      localStorage.setItem('pacientes', JSON.stringify(novosPacientes));
      alert('Paciente cadastrado com sucesso');
      setView('menu');
    }
  };

  return (
    <div>
      <h2>Cadastrar Paciente</h2>
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
      <button onClick={handleCadastrar}>Cadastrar</button>
      <button onClick={() => setView('menu')}>Voltar</button>
    </div>
  );
}

export default CadastrarPaciente;
