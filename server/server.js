require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      axios = require('axios'),
      massive = require('massive'),
      app = express()

const {
  SESSION_SECRET,
  SERVER_PORT,
  CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.listen(SERVER_PORT, () => {
  console.log(`There's a party goin' down on ${SERVER_PORT}`)
})