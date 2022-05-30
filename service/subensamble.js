import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

export const getSubensamble = async () => {
  const { data } = await axios.get(`${baseUrl}/subensamble`)
  return data
}

export const updateSubensamble = async (body) => {
  const { data } = await axios.put(`${baseUrl}/subensamble`, body)
  return data
}
