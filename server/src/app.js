const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const port = 8081
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.get('/status', (req, res) => {
  res.send({
      message: 'hello salis'
  })
})

app.listen(process.env.PORT || port)