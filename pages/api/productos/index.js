import { dbConnection } from 'utils/db'

import Producto from 'models/Producto'


dbConnection()

export default async function handler(req, res) {
  const { method, body } = req
  if (method !== 'GET')
    return res.status(400).json({ error: 'This method is not supported' })

  try {
    const productos = await Producto.find({})
    res.json(productos)
  } catch ({ errors }) {
    res.status(400).json({ error: errors })
  }
}
