import { dbConnection } from 'utils/db'

import Supplier from 'models/Supplier'

dbConnection()

export default async function handler(req, res) {
  const { method, body } = req
  if (method === 'POST') {
    // agregar seguridad para no enviar datos vacios agregar mensaje para errores y correctamente
    try {
      const newSupplier = new Supplier(body)
      const supplierSaved = await newSupplier.save()
      res.json(supplierSaved)
    } catch ({ errors }) {
      res.status(400).json(errors.description.message)
    }
  }else if(method === 'GET'){
    const result = await Supplier.find({})
    res.json(result)
  }else{
    return res.status(400).json({ error: 'This method is not supported' })
  }
}
