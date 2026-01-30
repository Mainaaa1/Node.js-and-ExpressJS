export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Missing Authorization header' })
  }

  const token = authHeader.split(' ')[1]

  if (token !== 'valid-token') {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Attach user info to request (mock)
  req.user = { email: 'admin@example.com', role: 'admin' }

  next()
}
