import React from 'react';

function CancelarConsulta({ setView, agendamentos, setAgendamentos }) {
  
  const handleCancelar = (index) => {
    const confirmCancel = window.confirm(`Deseja cancelar a consulta de ${agendamentos[index].paciente} em ${agendamentos[index].dia} às ${agendamentos[index].hora}?`);
    if (confirmCancel) {
      const novosAgendamentos = agendamentos.filter((_, i) => i !== index);
      setAgendamentos(novosAgendamentos);
      localStorage.setItem('agendamentos', JSON.stringify(novosAgendamentos));
      alert('Consulta cancelada com sucesso!');
    }  
  };

  return (
    <div>
      <h2>Cancelar Consulta</h2>
      {agendamentos.length === 0 ? (
        <p>Não há consultas agendadas.</p>
      ) : (
        <ul>
          {agendamentos.map((a, index) => (
            <li key={index}>
              {a.paciente} - {a.dia} - {a.hora} - {a.especialidade} 
              <button onClick={() => handleCancelar(index)}>Cancelar</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setView('menu')}>Voltar</button>
    </div>
  );
}

export default CancelarConsulta;
