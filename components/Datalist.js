import React from 'react'

export default function DataList({
  value,
  onChange,
  type,
  placeholder,
  label,
  data=[],
  id,
  size = 2
}) {
  
  let sizes = ['w-32', 'w-64', 'w-80']

  return (
    <div className='flex items-center mb-2'>
      {label && <h1 className=' w-64 dark:text-white'>{label}</h1>}
      
      <input
        type={type}
        value={value}
        list={id}
        onChange={onChange}
        className={`bg-gray-100 py-1 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none transition-colors ${sizes[size]}`}
        placeholder={placeholder}
      />
      <datalist id={id}>
        {data.map(({description,id,NumParteGen,itemNumber,subAssyNumber}) => (
          <option key={id} value={description || NumParteGen || itemNumber ||subAssyNumber}>
          </option>
        ))}
      </datalist>
    </div>
  )
}
