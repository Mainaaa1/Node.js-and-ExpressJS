import express from 'express'
import logger from './middlewares/logger.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express()

// Global middleware
app.use(express.json())
app.use(logger)

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'API running' })
})

export default app
