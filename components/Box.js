import React from 'react'

export default function Box({ children, type, onClick }) {
  const defaultStyle =
    'active:translate-y-0.5  px-2 py-1 mx-2 my-1 shadow-md rounded-full border dark:border-gray-600 dark:text-white transition-colors'
  if (type === 'r') {
    return (
      <button
        onClick={onClick}
        className={`${defaultStyle} bg-red-900/20 hover:bg-red-600 hover:text-white dark:bg-red-900/50 dark:hover:bg-red-600`}
      >
        {children}
      </button>
    )
  } else if (type === 'c') {
    return (
      <button
        onClick={onClick}
        className={`${defaultStyle} bg-yellow-500/20 dark:bg-yellow-500/50 dark:hover:bg-yellow-500 hover:bg-yellow-500 hover:text-white`}
      >
        {children}
      </button>
    )
  } else if (type === 'e') {
    return (
      <button
        onClick={onClick}
        className={`${defaultStyle} bg-green-400/20 hover:bg-green-600 hover:text-white dark:hover:bg-green-500 dark:bg-green-400/50`}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${defaultStyle} hover:bg-gray-400 dark:hover:bg-gray-600 dark:bg-gray-600`}
    >
      {children}
    </button>
  )
}
