import React from 'react'
import { useRouter } from 'next/router'

export default function SignOut() {
  const router = useRouter()
  const handlelogout = () => {
    window.localStorage.removeItem('loggedAFPUser')
    router.replace('/')

  }
  return (
    <a className='cursor-pointer hover:bg-red-600 dark:text-gray-50 text-black hover:text-white  rounded-md text-sm font-medium'>
        <button className='px-3 py-2' onClick={handlelogout}>Salir</button>
    </a>
  )
}
