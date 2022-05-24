import { dbConnection } from 'utils/db'

import User from 'models/User'

dbConnection()

export default async function handler(req, res) {
  const { method, params } = req
  const name = req.query.name
  if (method !== 'GET')
    return res.status(400).json({ error: 'This method is not supported' })
  try {
    const user = await User.findOne({ name })
    res.json(user)
  } catch (error) {res.status(404).json({ error: error})}
  
}
