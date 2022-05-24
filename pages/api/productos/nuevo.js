import { dbConnection } from 'utils/db'

import Producto from 'models/Producto'

dbConnection()

export default async function handler(req, res) {
  const { method, body } = req
  if (method !== 'POST')
    return res.status(400).json({ error: 'This method is not supported' })
  // agregar seguridad para no enviar datos vacios agregar mensaje para errores y correctamente
  const {
    NumParteGen,
    Description,
    partNumber,
    Category,
    Details,
    Alias,
    Customer,
    Buyer,
    Price,
    StockMin,
    Stacking,
    StackVol,
    Weight,
    LaborTime,
    Obsolete,
    Username
  } = body

  try {
    const newProduct = new Producto(body)
    const productSaved = await newProduct.save()
    res.json(productSaved)
  } catch ({ errors }) {
    res.status(400).json({ error: 'ocurrio un error' })
  }
}
