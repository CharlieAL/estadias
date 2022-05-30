import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

export const getCatCustom = async () => {
  const { data } = await axios.get(`${baseUrl}/catCustom`)
  return data
}

export const getSupplier = async () => {
  const { data } = await axios.get(`${baseUrl}/suppliers`)
  return data
}
export const getCategory = async () => {
  const { data } = await axios.get(`${baseUrl}/category`)
  return data
}

export const getComponentes = async () => {
  const { data } = await axios.get(`${baseUrl}/componente`)
  return data
}

export const createComponent = async (body) => {
  const { data } = await axios.post(`${baseUrl}/componente`, body)
  return data
}

export const updateComponent = async (body) => {
  const { data } = await axios.put(`${baseUrl}/componente`, body)
  return data
}

export const createSubensamble = async (body) => {
  const { data } = await axios.post(`${baseUrl}/subensamble`, body)
  return data
}