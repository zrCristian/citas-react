import { useState, useEffect } from 'react'
import Error from './Error';

function Formlurio( { pacientes, setPacientes, paciente, setPaciente } ) {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);


    useEffect ( () => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

    }, [paciente])

    function generarId () {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }
    
    function handleSubmit (e) {
        e.preventDefault()

        if ( [nombre, propietario, email, fecha, sintomas].includes("") ) {
            console.log("Por lo menos hay un campo vacio")
            setError(true)
            return;
        }

        setError(false)

        // Objeto de Paciente
        const objetoPaciente = {
            nombre, 
            propietario,
            email,
            fecha,
            sintomas,
        }


        if (paciente.id ) {
            //  Editando el Registro
            objetoPaciente.id = paciente.id 
            const pacientesActualizados = pacientes.map ( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            objetoPaciente.id =  generarId()
            setPacientes([...pacientes, objetoPaciente])
        }


        // Reinciar el form
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")

    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-center text-3xl'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-4 text-center mb-8'>
                Añade Pacientes y {""}
                <span className='text-indigo-600 font-bold'>Adminstralos</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-md py-10 px-5 mb-8 ml-3 mr-3 md:mr-1">  { /* lo del margin lo podria poner al div padre  */ }
            { error && <Error><p>Todos los campos son obligatorio</p></Error>}

                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 font-bold uppercase cursor-pointer'>
                        Nombre Mascota
                    </label>

                    <input
                        id='mascota' type="text" placeholder='Nombre de la Mascota' 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombre}
                        onChange = { (e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase cursor-pointer'>
                        Nombre Propietario
                    </label>

                    <input
                        id='propietario' type="text" placeholder='Nombre del Propietario' 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={propietario}
                        onChange = { (e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 font-bold uppercase cursor-pointer'>
                        Email
                    </label>

                    <input
                        id='email' type="email" placeholder='Email contacto propietario' 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange = { (e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 font-bold uppercase cursor-pointer'>
                        Alta
                    </label>

                    <input
                        id='alta' type="date"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={fecha}
                        onChange = { (e) => setFecha(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase cursor-pointer'>
                        Sintomas
                    </label>

                    <textarea 
                        id= "sintomas"
                        placeholder='Describa los sintomas'
                        className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                        value={sintomas}
                        onChange = { (e) => setSintomas(e.target.value)}
                    />
                </div>                

                <input 
                    type="submit"
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer rounded-md hover:bg-indigo-700 transition-colors duration-300' 
                    value= {paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />

            </form>
        </div>
    )
}

export default Formlurio
