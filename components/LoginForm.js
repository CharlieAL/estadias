import { useState, useEffect } from 'react'
import { login } from 'service/login'
import { useRouter } from 'next/router'
import getUser from 'hooks/getUser'


export default function LoginForm({}) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [load, setLoad] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const user = getUser()
    if (user) {
      if (user.level === 'admin') {
        router.push('/Productos')
      } else if (user.level === 'aduanas') {
        router.push('/Aduanas')
      } else if (user.level === '3') {
        router.push('/ingieneria')
      }
    }
  }, [router])

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoad(true)
    login({ name, password })
      .then((user) => {
        router.replace('/Productos')
        window.localStorage.setItem('loggedAFPUser', JSON.stringify(user))
      })
      .catch(({ response }) => {
        setLoad(false)
        setError(response.data.error)
      })
  }
  return (
    <>
      {load && (
        <div className='flex min-h-screen justify-center items-center dark:bg-bg_dark dark:text-white'>
          <h1 className='text-9xl'>Cargando</h1>
        </div>
      )}
      {!load && (
        <div className='flex min-h-screen justify-center items-center transition-colors dark:bg-bg_dark'>
          <div className='  w-96 text-center rounded-md shadow-2xl'>
            <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 transition-colors'>
              <form className='space-y-6' onSubmit={handleLogin}>
                <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                  Inicio de Sesion
                </h3>
                {error && <b className='text-red-500'>{error}</b>}
                <div>
                  <label className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'>
                    Tu nombre
                  </label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    className='bbg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none'
                    placeholder='Nombre'
                    required
                  />
                </div>
                <div>
                  <label className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'>
                    Tu contraseña
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none'
                    required=''
                  />
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
