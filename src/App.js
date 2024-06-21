import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import CadastrarPaciente from './components/CadastrarPaciente';
import MarcarConsulta from './components/MarcarConsulta';
import CancelarConsulta from './components/CancelarConsulta';

function App() {
  const [view, setView] = useState('menu');
  const [pacientes, setPacientes] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    setPacientes(pacientes);
    setAgendamentos(agendamentos);
  }, []);

  return (
    <div>
      {view === 'menu' && <Menu setView={setView} />}
      {view === 'cadastrar' && <CadastrarPaciente setView={setView} pacientes={pacientes} setPacientes={setPacientes} />}
      {view === 'marcar' && <MarcarConsulta setView={setView} pacientes={pacientes} agendamentos={agendamentos} setAgendamentos={setAgendamentos} />}
      {view === 'cancelar' && <CancelarConsulta setView={setView} agendamentos={agendamentos} setAgendamentos={setAgendamentos} />}
    </div>
  );
}

export default App;
