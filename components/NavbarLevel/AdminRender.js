import MyToggle from 'components/MyToggle'
import SignOut from 'components/SignOut'
import React from 'react'
import Link from 'next/link'

export default function AdminRender() {
  return (
    <div className='ml-10 flex items-baseline space-x-4'>
      <div className=''>
        <MyToggle />
      </div>
      <Link href='/Productos'>
        <a className='cursor-pointer dark:text-gray-50 hover:bg-green-600 rounded-md  font-semibold px-3 py-2 text-sm hover:text-white'>
          Productos
        </a>
      </Link>
      <Link href='/Componentes'>
        <a className='cursor-pointer hover:bg-green-600 dark:text-gray-50 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
          Componentes
        </a>
      </Link>
      <Link href='/Subensambles'>
        <a className='cursor-pointer hover:bg-green-600 dark:text-gray-50 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
          Subensambles
        </a>
      </Link>
      <Link href='Planeacion'>
        <a className='cursor-pointer hover:bg-green-600 dark:text-gray-50 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
          Planeacion
        </a>
      </Link>
      <Link href='POyEntregas'>
        <a className='cursor-pointer hover:bg-green-600 dark:text-gray-50 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
          PO y Entregas
        </a>
      </Link>
      <Link href='Aduanas'>
        <a className='cursor-pointer hover:bg-green-600 dark:text-gray-50 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
          Aduanas
        </a>
      </Link>
      <Link href='Almacen'>
        <a className='cursor-pointer hover:bg-green-600 dark:text-gray-50 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
          Almacen
        </a>
      </Link>
      <Link href='Admin'>
        <a className='cursor-pointer hover:bg-green-600 dark:text-gray-50 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
          Admin
        </a>
      </Link>
      <SignOut />
    </div>
  )
}
