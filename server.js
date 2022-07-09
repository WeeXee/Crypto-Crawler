// imports

const express = require('express')
const app = express()
const port = 3001

//Static files

app.use("/public", express.static('public'))

//set views

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/page.html')
})

app.get('/views/page.html', (req, res) => {
    res.sendFile(__dirname + '/views/page.html')
})

app.get('/views/byname.html', (req, res) => {
    res.sendFile(__dirname + '/views/byname.html')
})

// listen on

app.listen(port, () => console.info(`Go on : http://localhost:3001/`))