export default function LoginForm({
  name,
  handleSubmit,
  handleChageName,
  password,
  handleChagePassword
}) {
  return (
    <div className='flex min-h-screen justify-center items-center transition-colors dark:bg-bg_dark'>
      <div className='  w-96 text-center rounded-md shadow-2xl'>
        <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 transition-colors'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
              Inicio de Sesion
            </h3>
            <div>
              <label className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'>
                Tu nombre
              </label>
              <input
                type='text'
                name='email'
                id='email'
                value={name}
                onChange={handleChageName}
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
                onChange={handleChagePassword}
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
  )
}
