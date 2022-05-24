import { dbConnection } from 'utils/db'

import User from 'models/User'

dbConnection()

export default async function handler(req, res) {
  const {method, body} = req
  if (method !== 'POST')
    return res.status(400).json({ error: 'This method is not supported' })

  const { name, passwordHash, level } = body
  try {
    const newUser = new User({name, passwordHash, level})
    const saved = await newUser.save()
    res.status(200).json(saved)
  } catch ({errors}) {
      res.status(400).json({error: errors })
  }
}
