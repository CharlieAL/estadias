import { useState,useEffect } from 'react'

import Image from 'next/image'
export default function MyToggle() {
  const [enabled, setEnabled] = useState()
  const [theme, setTheme] = useState('')

  useEffect(() =>{
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme(<Image src="/sun.png" width={15} height={15}  alt='icon-dark'/>)
      setEnabled(true)
    }else{
      document.documentElement.classList.remove('dark')
      setTheme('dark')
      setTheme(<Image src="/moon.png" width={15} height={15}  alt='icon-dark'/>)
    }
  }, [enabled])

  const handleClick = () => {
    !enabled 
      ? localStorage.theme = 'dark' 
      : localStorage.theme = 'light'
    setEnabled(!enabled)
  }

  const light = 'rounded-md text-center flex text-gray-800 border-2 px-3 py-1 relative'

  const dark = 'bg-gray-800 flex text-center border border-gray-700 text-gray-400  px-3 py-1 rounded-md relative'

  
  return <button onClick={handleClick} className={`${!enabled ? light:dark}`} >{theme}</button>
}