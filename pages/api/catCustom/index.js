import { dbConnection } from 'utils/db'

import CatCustom from 'models/CatCustom'

dbConnection()

export default async function handler(req, res) {
  const { method, body } = req
  if (method === 'POST') {
    // agregar seguridad para no enviar datos vacios agregar mensaje para errores y correctamente
    try {
      const newCatCustom = new CatCustom(body)
      const catCustomSaved = await newCatCustom.save()
      res.json(catCustomSaved)
    } catch ({ errors }) {
      res.status(400).json(errors.description.message)
    }
  }else if(method === 'GET'){
    const result = await CatCustom.find({})
    res.json(result)
  }else{
    return res.status(400).json({ error: 'This method is not supported' })
  }
}
