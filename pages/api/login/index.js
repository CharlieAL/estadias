import { dbConnection } from 'utils/db'

import jwt from 'jsonwebtoken'

import User from 'models/User'

dbConnection()

export default async function handler(req, res) {
  const { method, body } = req
  if (method !== 'POST')
    return res.status(400).json({ error: 'This method is not supported' })

  const { name, password } = body

  const user = await User.findOne({ name })

  const passwordCorrect = user === null ? false : password === user.passwordHash

  if (!passwordCorrect) {
    res.status(401).json({
      error: 'Wrong password or wrong username'
    })
  } else {
    const userForToken = {
      id: user._id,
      name: user.name
    }

    const token = jwt.sign(userForToken, process.env.TOKEN_SECRET)

    res.send({
      name: user.name,
      level: user.level,
      token
    })
  }
}
