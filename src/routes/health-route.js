import express from 'express'

const app = express()

app.get('/api/health', (req, res) => {
    res.json({health: 'Corriendo OK'})
})

export default app