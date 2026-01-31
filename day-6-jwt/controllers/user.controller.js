export function getUsers(req, res) {
  res.json([
    { id: 1, name: 'Ian' },
    { id: 2, name: 'Backend Roadmap User' }
  ])
}
