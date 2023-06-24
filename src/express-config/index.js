import express from 'express'
import routes from '../routes'

const app = express()

app.disable('x-powered-by')
app.use(express.urlencoded({limit: '100mb', extended: true}))
app.use(express.json({limit: '100mb'}))

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.CROSS_ORIGIN || '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

app.use(routes)

export default app