import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import middlewareRoutes from './app/routes'
const app: Application = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1', middlewareRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Medi Cart server is running successfully',
  })
})

export default app
