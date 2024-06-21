import React, { useState } from 'react';

function MarcarConsulta({ setView, pacientes, agendamentos, setAgendamentos }) {
  const [pacienteIndex, setPacienteIndex] = useState('');
  const [dia, setDia] = useState('');
  const [hora, setHora] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const handleMarcar = () => {
    const dataAtual = new Date();
    const dataConsulta = new Date(`${dia}T${hora}`);
    if (dataConsulta < dataAtual) {
      alert('Não é possível marcar consultas retroativas.');
      return;
    }

    if (pacienteIndex === '') {
      alert('Selecione um paciente antes de marcar a consulta.');
      return;
    }

    const pacienteSelecionado = pacientes[pacienteIndex];

    const novoAgendamento = {
      paciente: pacienteSelecionado.nome,
      telefone: pacienteSelecionado.telefone,
      dia,
      hora,
      especialidade
    };

    const novosAgendamentos = [...agendamentos, novoAgendamento];
    setAgendamentos(novosAgendamentos);
    localStorage.setItem('agendamentos', JSON.stringify(novosAgendamentos));
    alert('Consulta marcada com sucesso');
    setView('menu');
  };

  return (
    <div>
      <h2>Marcar Consulta</h2>
      <select onChange={e => setPacienteIndex(e.target.value)}>
        <option value="">Selecione um paciente</option>
        {pacientes.map((p, index) => (
          <option key={index} value={index}>
            {p.nome}
          </option>
        ))}
      </select>
      <input type="date" value={dia} onChange={e => setDia(e.target.value)} />
      <input type="time" value={hora} onChange={e => setHora(e.target.value)} />
      <input placeholder="Especialidade" value={especialidade} onChange={e => setEspecialidade(e.target.value)} />
      <button onClick={handleMarcar}>Marcar</button>
      <button onClick={() => setView('menu')}>Voltar</button>
    </div>
  );
}

export default MarcarConsulta;
