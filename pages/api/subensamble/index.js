import { dbConnection } from 'utils/db'

import Subensamble from 'models/Subensamble'

dbConnection()

export default async function handler(req, res) {
  const { method, body } = req
  if (method === 'POST') {
    // agregar seguridad para no enviar datos vacios agregar mensaje para errores y correctamente
    try {
      const newSubensamble = new Subensamble(body)
      const subensambleSaved = await newSubensamble.save()
      res.json(subensambleSaved)
    } catch ({ errors }) {
      if (errors.subAssyNumber) {
        return res.status(400).json({ error: errors.subAssyNumber.message })
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
  } else if (method === 'GET') {
    const data = await Subensamble.find()
    res.json(data)
  } else if (method === 'PUT') {
    try {
      const { subAssyNumber, ...update } = body
      const subensamble = await Subensamble.findOneAndUpdate(
        { subAssyNumber },
        update,
        { new: true }
      )
      res.json(subensamble)
    } catch (error) {
      console.log(error)
    }
  } else {
    return res.status(400).json({ error: 'This method is not supported' })
  }
}
