import React from 'react'
import usePacientes from '../hooks/usePacientes'

const Paciente = ({paciente}) => {
    
    const { setEdicion, eliminarPaciente } = usePacientes()

    const { email, nombre, fecha, propietario, sintomas, _id} = paciente

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat("es", {dateStyle: "long"}).format(nuevaFecha)
    }

    return (
        <div className='mx-5 my-1 bg-white shadow-md px-5 py-10 rounded'>
            <p className='font-bold uppercase text-indigo-700 my-2'>Nombre: 
                <span className='font-normal normal-case'> {nombre}</span>
            </p>

            <p className='font-bold uppercase text-indigo-700 my-2'>Propietario: 
                <span className='font-normal normal-case'> {propietario}</span>
            </p>

            <p className='font-bold uppercase text-indigo-700 my-2'>Email Contacto: 
                <span className='font-normal normal-case'> {email}</span>
            </p>

            <p className='font-bold uppercase text-indigo-700 my-2'>Fecha Alta: 
                <span className='font-normal normal-case'> {formatearFecha(fecha)}</span>
            </p>

            <p className='font-bold uppercase text-indigo-700 my-2'>Sintomas: 
                <span className='font-normal normal-case'> {sintomas}</span>
            </p>

            <div className='flex justify-between mt-5'>
                <button
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded'
                    onClick={() => setEdicion(paciente)}
                >Editar</button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded'
                    onClick={() => eliminarPaciente(_id)}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente