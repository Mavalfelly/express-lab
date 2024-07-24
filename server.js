const express = require('express')
const app = express()


app.listen(3000, () => {//3000-8000 active ports    
    console.log('listening on port 3000')
})


//section 1
app.get('/greetings/:name', (req, res) => {
    res.send(`<h1>Hello ${req.params.name} how are you today?`)
})

//section 2
app.get('/roll/:num', (req, res) => {
    res.send(`<h1>You rolled a  ${Math.floor(Math.random()*(req.params.num-0))}`)
})

//section 3
