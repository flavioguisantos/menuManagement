import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'

import userRoutes from './routes/user'
import menuRoutes from './routes/menu'
import swaggerDocument from './documents/swagger'

const HOST = process.env.HOST || 'https://localhost'
const PORT = process.env.PORT || 8000

mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost:27017/local',
    {},
    err => {
        const msg = err
            ? `Failed to connect to MongoDB: ${err}`
            : `⚡️ MongoDB connection established successfully`
        console.log(msg)
    },
)

const app = express()
app.use(express.json())
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/menu', menuRoutes)
app.use('/api/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
        defaultModelsExpandDepth: -1
    }
}))
app.route('/healthcheck')
    .get((request, response) => response.json({ status: 'healthy' }))

app.all('*', (request, response) => {
    response.status(400).json({
        message: 'Whoops, wrong way.'
    })
})
app.listen(PORT, () => {
    console.log(`⚡️ Server is running at ${HOST}:${PORT}`)
})
