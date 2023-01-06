import { useEffect, useState } from 'react'
import Formlurio from './components/Formlurio';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

  const  [pacientes, setPacientes] = useState([]);
  // const  [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
  const  [paciente, setPaciente] = useState({});


  useEffect(() => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) 
      console.log(Boolean(pacientesLS))
      if(pacientesLS) pacientesLS.length > 0 && setPacientes(pacientesLS)
      // if(pacientesLS.length > 0) setPacientes(pacientesLS)

  }, [])

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])


  function eliminarPaciente (id) {
    const pacientesActualizados = pacientes.filter ( paciente => paciente.id !== id )
    setPacientes(pacientesActualizados)
  }

  
  return (
    <div className="container mx-auto mt-7 xl:px-5">

      <Header/>

      <div className='mt-7 md:flex'>
        <Formlurio
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>


    </div>
  )
}



export default App
