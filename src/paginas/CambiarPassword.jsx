import React, { useEffect, useState } from 'react'
import AdminNav from '../components/AdminNav'
import ErrorAlerta from "../components/ErrorAlerta"
import useAuth from '../hooks/useAuth'

const CambiarPassword = () => {
    const {guardarPassword} = useAuth()

    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState({
        pwd_actual: "",
        pwd_nuevo: ""
    })

    const { msg } = alerta

    const handleSubmit = async e => {
        e.preventDefault();

        if(Object.values(password).some(campo => campo === "")) {
            setAlerta ({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return
        }
        if(password.pwd_nuevo.length < 6){
            setAlerta ({
                msg: "La nueva contraseña debe tener minimo 6 carácteres",
                error: true
            })
            return
        }
        const respuesta = await guardarPassword(password)

        setAlerta(respuesta)
    }

    return (
        <>
            <AdminNav/>
            <h2 className='font-black text-3xl text-center mt-10'>Cambiar Password</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Verifica tu {" "}
                <span className='text-indigo-600 font-bold'>Password aquí</span>
            </p>

            <div className='flex justify-center'>
                <div className='w-full md:w-1/2 bg-white shadow rounded p-5'>

                    {msg && <ErrorAlerta alerta={alerta}/>}

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className='my-3'>
                            <label className='uppercase font-bold text-gray-600'>Password Acutual</label>
                            <input
                                type='password'
                                className='border bg-gray-50 w-full p-2 mt-5 rounded'
                                name='pwd_actual'
                                placeholder='Escribe tu password actual'
                                onChange={e => setPassword ({
                                    ...password,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>

                        <div className='my-3'>
                            <label className='uppercase font-bold text-gray-600'>Password Nuevo</label>
                            <input
                                type='password'
                                className='border bg-gray-50 w-full p-2 mt-5 rounded'
                                name='pwd_nuevo'
                                placeholder='Escribe tu nuevo password'
                                onChange={e => setPassword ({
                                    ...password,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>

                        <input
                            type='submit'
                            value="Actualizar Password"
                            className='bg-indigo-700 px-10 py-3 font-bold text-white rounded uppercase w-full mt-5'
                        />

                    </form>
                </div>
            </div>
        </>
    )
}

export default CambiarPassword