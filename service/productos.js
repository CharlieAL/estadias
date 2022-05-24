import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/productos'

export const createNewProduct = async (body) => {

  const { data } = await axios.post(`${baseUrl}/nuevo`, body)
  return data
}

export const getProducts = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}
