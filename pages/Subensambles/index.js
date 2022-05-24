import {useEffect,useState} from 'react'
import getUser from 'hooks/getUser'
import Layout from 'components/Layout'
import { Admin } from 'components/category/Subensambles'

export default function Subensambles() {
  const [user,setUser] = useState('')
  useEffect(() => {
    const user = getUser()
    if (user) {
      setUser(user)
    }else {
      router.push('/')
    }
  }, [])

  const levelUserAndRender = (level) => {
    if (level === 'admin') {
      return <Admin />
    } else if (level === 'aduanas') {
      return adsda
    }
  }



  return <Layout user={user}>
    {levelUserAndRender(user.level)}
  </Layout>
}
