import { dbConnection } from 'utils/db'

import Componente from 'models/Componente'

dbConnection()

export default async function handler(req, res) {
  const { method, body } = req
  if (method === 'POST') {
    // agregar seguridad para no enviar datos vacios agregar mensaje para errores y correctamente
    try {
      const newComponente = new Componente(body)
      const componenteSaved = await newComponente.save()
      res.json(componenteSaved)
    } catch ({ errors }) {
      if (errors.itemNumber) {
        return res.status(400).json({ error: errors.itemNumber.message })
      }
      if (errors.category) {
        return res.status(400).json({ error: errors.category.message })
      }
      if (errors.catCustom) {
        return res.status(400).json({ error: errors.catCustom.message })
      }
      if (errors.supplier) {
        return res.status(400).json({ error: errors.supplier.message })
      }
      return res.status(400).json({ error: errors })
    }
  }else if(method === 'GET') {
    const data = await Componente.find()  
    res.json(data)
  }else if (method === 'PUT') {
    const { itemNumber, ...update } = body
    const componente = await Componente.findOneAndUpdate({ itemNumber }, update, { new: true })
    res.json(componente)
  }else{
    return res.status(400).json({ error: 'This method is not supported' })
  }
}
