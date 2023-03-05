const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3004
const DB_SERVER = require('./db/db')
const cors = require('cors')

const artists = require('./controllers/artists')

const allowlist = [process.env.CLIENT]

const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true ,credentials: true} 
  } else {
    corsOptions = { origin: false } 
  }
  callback(null, corsOptions) 
}

app.use(bodyParser.json())
app.use(cors(corsOptionsDelegate));


app.use('/artists',artists)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
    DB_SERVER.startServer();
})