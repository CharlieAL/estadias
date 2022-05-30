import React from 'react'

export default function Input({ value, onChange, type, placeholder, label, name,checked }) {
  return (
    <div className='flex items-center mb-2'>
      <h1 className='px-10 w-64 dark:text-white'>{label}</h1>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        checked={checked}
        className='py-1 border bg-gray-100 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 px-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none transition-colors'
        placeholder={placeholder}
      />
    </div>
  )
}
