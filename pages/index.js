import LoginForm from 'components/LoginForm'
import { useState, useEffect } from 'react'
import { login } from 'service/login'
import { useRouter } from 'next/router'
import getUser from 'hooks/getUser'
import Layout from 'components/Layout'

export default function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

   useEffect( () => {
    const user =  getUser()
    if (user) {
      if (user.level === 'admin') {
        router.push('/Productos')
      } else if (user.level === 'aduanas') {
        router.push('/Aduanas')
      } else if (user.level === '3') {
        console.log('this is 3')
      }
    }
  }, [router])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await login({ name, password })
      if (user) {
        router.replace('/Productos')

        window.localStorage.setItem('loggedAFPUser', JSON.stringify(user))
      }
    } catch (error) {
      console.log('invalid login')
    }
  }

  return (
    <Layout>
      <LoginForm
        name={name}
        password={password}
        handleChageName={({ target }) => setName(target.value)}
        handleChagePassword={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
    </Layout>
  )
}
