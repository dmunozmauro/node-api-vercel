// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Aplicacion corriendo')
})

app.get('/about', (req, res) => {
  res.send('Ruta de aplicacion prueba ')
})

// Export the Express API
module.exports = app