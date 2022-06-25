import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

import routes from './routes'

import SwaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

class App {
  public express: express.Application

  constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(
      '/doc',
      SwaggerUi.serve,
      SwaggerUi.setup(swaggerDocument, { explorer: true })
    )
  }

  private database (): void {
    mongoose.connect(process.env.MONGODB_URL as string)
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
