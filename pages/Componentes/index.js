import { useEffect, useState } from 'react'
import getUser from 'hooks/getUser'
import Layout from 'components/Layout'
import { Admin } from 'components/category/Componentes'
import FormNuevo from 'components/componentes/nuevoComponente'
import { useRouter } from 'next/router'

export default function Productos() {
  const [user, setUser] = useState('')
  const [open, setOpen] = useState({
    nuevo: false,
  })
  const router = useRouter()
  useEffect(() => {
    const user = getUser()
    if (user) {
      setUser(user)
    } else {
      router.push('/')
    }
  }, [router])


  const handleChange = (name,value) => setOpen({...open,[name]:value})

  const renderForms = () => {
    if (open.nuevo) {
      return <FormNuevo user={user}/>
    }else if (open.endradas){
      
    }
  }

  const levelUserAndRender = (level) => {
    if (level === 'admin') {
      return <Admin admin1={() => handleChange("nuevo",!open.nuevo)} />
    } else if (level === 'aduanas') {
      return adsda
    }
  }

  return (
    <Layout user={user}>
      {levelUserAndRender(user.level)}
      {renderForms()}
    </Layout>
  )
}
