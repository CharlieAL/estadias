import React from 'react'

export default function Textarea({ value, onChange, type, placeholder,label }) {
  return (
    <div className='flex items-center mb-2'>
      <h1 className='px-10 w-64 dark:text-white'>{label}</h1>
      <textarea className='border bg-gray-100 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 px-2 py-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white transition-colors outline-none' cols={36} onChange={onChange} value={value}/>
    </div>
  )
}
