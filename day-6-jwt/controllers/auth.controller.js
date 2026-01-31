import { signToken } from '../utils/jwt.js'

export function login(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  // Mock user (replace with DB later)
  const user = {
    id: 1,
    email
  }

  const token = signToken(user)

  res.json({
    message: 'Login successful',
    token
  })
}
