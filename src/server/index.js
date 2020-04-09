const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const socketio = require('socket.io')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const port = process.env.PORT || 3000

const app = express()
app.use(cors())

app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common'))

app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }))

app.use(compression())
app.use(helmet())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/ping', (req, res) => res.status(200).send('pong'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

const startListening = () => {
  const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening port ${port}...`)
  })

  const io = socketio(server)
  require('./socket')(io)
}

if (require.main === module) {
  startListening()
}

module.exports = app
