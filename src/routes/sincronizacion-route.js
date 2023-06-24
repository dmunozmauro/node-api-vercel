import express from 'express'
import {SincronizacionService} from '../service'

const app = express()
const router = express.Router()
app.use('/api/code', router)

// code pass sha-2
router.get('/hash', SincronizacionService.CodehashClave)


export default app