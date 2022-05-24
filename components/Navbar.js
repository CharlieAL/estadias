import AdminRender from './NavbarLevel/AdminRender'
import EmptyNavbar from './NavbarLevel/EmptyNavbar'

function Navbar({level}) {
  const WhatLevelIs = (thisLevel) =>{
    if(!thisLevel){
      return EmptyNavbar()
    }else{
      return AdminRender()
    }
  }

  return (
    <div>
      <nav className='fixed bg-white w-full z-40 transition-colors dark:bg-bg_dark border-b-2 border-gray-200 dark:border-gray-700'>
        <div className='px-2'>
          <div className='flex items-center h-20 w-full'>
            <div className='flex items-center justify-center w-full'>
              
              {/* hacer un responsive */}
              <div className=''>
                
                {WhatLevelIs(level)}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
