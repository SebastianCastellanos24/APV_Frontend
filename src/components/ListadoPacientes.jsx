import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {
    const { pacientes } = usePacientes()

    return (
        <>
            {pacientes.length ? 
                (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                        <p className='text-lg text-center mb-10'>
                            Añade tus Pacientes y
                            <span className='text-indigo-600 font-bold'> Citas</span>
                        </p>


                        {pacientes.map(paciente => (
                            <Paciente
                                key={paciente._id}
                                paciente={paciente}
                            />
                        ))}
                    </>
                ) : 
                (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                        <p className="text-x mt-5 mb-10 text-center">
                            Comienza agregando pacientes
                            <span className="text-indigo-600 font-bold"> y aparecerán en este lugar</span>
                        </p>

                        {pacientes.map( paciente => (
                            <Paciente
                                key={paciente._id}
                                paciente={paciente}
                            />
                        ))}
                    </>
                )
            }
        </>
    )
}

export default ListadoPacientes