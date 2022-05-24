import React from 'react'

export default function Button({children}) {
  return (
    <button
      type='submit'
      className='w-52 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    >
      {children}
    </button>
  )
}