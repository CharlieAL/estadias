import { useEffect, useState } from 'react'
import getUser from 'hooks/getUser'
import Layout from 'components/Layout'
import { Admin } from 'components/category/Productos'
import FormNuevo from 'components/productos/nuevoProductoFrom'
import { useRouter } from 'next/router'
import { getProducts } from 'service/productos'


export default function Productos({productos}) {
  const [user, setUser] = useState('')
  const [nuevo, setNuevo] = useState(false)
  const [editar, setEditar] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const user = getUser()
    console.log(user)
    if (user) {
      setUser(user)
    } else {
      router.push('/')
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
      return (
        <FormNuevo user={user} productos={productos}/>
      )
    }
  }

  const levelUserAndRender = (level) => {
    if (level === 'admin') {
      return <Admin admin1={() => handleOpen("nuevo"  )} />
    } else if (level === 'aduanas') {
      return adsda
    }
  }

  return (
    <>
    <Layout user={user} >
      {levelUserAndRender(user.level)}
      {renderForms()}
    </Layout>
    </>
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