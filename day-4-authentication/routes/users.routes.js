import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/', authMiddleware, (req, res) => {
  res.json({
    message: 'Protected user data',
    user: req.user,
  })
})

export default router
