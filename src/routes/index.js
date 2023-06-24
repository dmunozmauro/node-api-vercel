import express from 'express'
import healthRoute from './health-route'
import sincronizacionRoute from './sincronizacion-route'

const app = express()

app.use(
    healthRoute,
    sincronizacionRoute
)

export default app