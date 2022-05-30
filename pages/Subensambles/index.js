import { useEffect, useState } from 'react'
import getUser from 'hooks/getUser'
import Layout from 'components/Layout'
import { Admin } from 'components/category/Subensambles'
import FormNuevo from 'components/subensambles/nuevoSubensamble'
import FormEditar from 'components/subensambles/editarSubensamble'
import { useRouter } from 'next/router'
import { getProducts } from 'service/productos'

export default function Productos({productos}) {
  const [user, setUser] = useState('')
  const [open, setOpen] = useState({
    nuevo: false,
    editar: false
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

  const handleOpen = (name) => {
    if (name ==='editar') {
      setOpen({nuevo: false, editar: !open.editar})
    }else if (name ==='nuevo'){
      setOpen({nuevo: !open.nuevo, editar: false})
    }
  }
  const renderForms = () => {
    if (open.nuevo) {
      return (
        <FormNuevo user={user} productos={productos}/>
      )
    }else if(open.editar){
      return (
        <FormEditar user={user} productos={productos}/>
      )
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

export async function getStaticProps(context) {
  const productos = await getProducts()
  return {
    props: {
      productos
    }, // will be passed to the page component as props
  }
}