import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { postsRoutes } from './routes/posts.js'
import { usersRoutes } from './routes/users.js'
import { eventRoutes } from './routes/events.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

postsRoutes(app)
usersRoutes(app)
eventRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
