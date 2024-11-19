import express, { Application, Request, Response } from 'express'
const app: Application = express()

import cors from 'cors'
import { studentRoute } from './app/modules/students/student.route'
app.use(express.json())
app.use(cors())

// application route
app.use("/api/v1/students", studentRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
