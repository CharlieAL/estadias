import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/users'

export const getOneUser = async (name) => {
  const { data } = await axios.get(`${baseUrl}/${name}`)
  return data
}