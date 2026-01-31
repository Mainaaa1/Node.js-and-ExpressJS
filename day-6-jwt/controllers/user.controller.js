export function getUsers(req, res) {
  res.json({
    message: 'Protected users data',
    user: req.user,
    users: [
      { id: 1, name: 'Ian' },
      { id: 2, name: 'Secure User' }
    ]
  })
}
