import { useEffect, useState } from 'react'
import getUser from 'hooks/getUser'
import Layout from 'components/Layout'
import { Admin } from 'components/category/Componentes'
import FormNuevo from 'components/componentes/nuevoComponente'
import { useRouter } from 'next/router'
import FormEditar from 'components/componentes/editarComponente'

export default function Productos() {
  const [user, setUser] = useState('')
  const [nuevo, setNuevo] = useState(false)
  const [editar, setEditar] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const user = getUser()
    if (user) {
      setUser(user)
    } else {
      router.replace('/')
    }
  }, [router])


  const handleOpen = (name) => {
    if (name ==='editar') {
      setNuevo(false)
      setEditar(!editar)
    }else if (name ==='nuevo'){
      setNuevo(!nuevo)
      setEditar(false)
    }
  }

  const renderForms = () => {
    if (nuevo) {
      return <FormNuevo user={user} 
      />
    }else if (editar){
      return <FormEditar user={user}/>
    }
  }

  const levelUserAndRender = (level) => {
    if (level === 'admin') {
      return <Admin 
      admin1={() => handleOpen('nuevo')} 
      admin2={() => handleOpen('editar')} 
      />
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
