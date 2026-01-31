export function login(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  res.json({
    message: 'Login successful (mock)',
    token: 'fake-jwt-token'
  })
}
