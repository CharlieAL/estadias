import React from 'react'

export default function Button({ children, color, onClick,size=0 }) {
  let colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]
  let sizes = ['w-16', 'w-32', 'w-52']

  if (color === 'info') {
    return (
      <button
        onClick={onClick}
        className={`text-white bg-green-600 dark:bg-green-500  hover:bg-green-700 dark:hover:bg-green-600
        rounded-lg text-sm py-1.5 ${sizes[size]} 
      text-center`}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className='w-52 text-white bg-blue-700 dark:bg-blue-600  hover:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  '
    >
      {children}
    </button>
  )
}
