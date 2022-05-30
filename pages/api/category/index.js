import { dbConnection } from 'utils/db'

import Category from 'models/Category'

dbConnection()

export default async function handler(req, res) {
  const { method, body } = req
  if (method === 'POST') {
    // agregar seguridad para no enviar datos vacios agregar mensaje para errores y correctamente
    try {
      const newCategory = new Category(body)
      const categorySaved = await newCategory.save()
      res.json(categorySaved)
    } catch ({ errors }) {
      res.status(400).json(errors.description.message)
    }
  }else if(method === 'GET'){
    const result = await Category.find()
    res.json(result)
  }else{
    return res.status(400).json({ error: 'This method is not supported' })
  }
}
