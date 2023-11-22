const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('androidByLazy')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at twitter.com</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Please login at Hello There are you?</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})