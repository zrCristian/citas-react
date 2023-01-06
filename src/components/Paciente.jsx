
function Paciente({ paciente, setPaciente, eliminarPaciente }) {

const {nombre, propietario, email, fecha, sintomas, id} = paciente

function handleEliminar () {
    const respuesta = confirm("¿Deseas eliminar el paciente?")
    
    if (respuesta) eliminarPaciente(id)
}

    return (
        <div className="mx-3 my-5 bg-white shadow-lg py-10 px-5 rounded-md">
            <p className="font-bold mb-5 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">Fecha Alta: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">Sintomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between">
                <button 
                type="button"
                className='bg-indigo-600  py-2 px-10 text-white uppercase font-bold cursor-pointer rounded-md hover:bg-indigo-700 transition-colors duration-300 mr-4' 
                onClick= { () => setPaciente(paciente) }
                >
                    Editar
                </button>

                <button
                type="button"
                className='bg-red-600  py-2 px-10 text-white uppercase font-bold cursor-pointer rounded-md hover:bg-red-700 transition-colors duration-300' 
                onClick= {handleEliminar}

                >
                    Eliminar
                </button>
            </div>

        </div>
    )
}

export default Paciente
