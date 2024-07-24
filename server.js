const express = require('express')
const app = express()
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
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


app.get('/collectibles/:idx', (req, res) => {
    const select = req.params.idx;
    const coll = collectibles[select]
    res.send(`So you want the ${coll.name}? That will be $${coll.price}please!`);
})


//section 4
app.get('/shoes', (req, res) => {
    const min_price = parseFloat(req.query.min_price);
    const max_price = parseFloat(req.query.max_price);
    const type= req.query.type;
    let list = [...shoes]
    if(type){
        list = list.filter(shoe => shoe.type === type)
    }
    if(min_price){
        list = list.filter(shoe => shoe.price >= min_price)
    }
    if(max_price){
        list = list.filter(shoe => shoe.price <= max_price)
    }
    res.send(list)
    
    
    
})
