const express = require('express')
const app = express()
const PORT = 3000
// ---------------------------(5)
const fruitData = require('./models/fruits')
const veggieData = require('./models/veggies')
const dessertData = require('./models/dessert')
// ----------------------------(7)

const fruitsRouter = require('./routes/fruits')
const veggiesRouter = require('./routes/veggies')
const dessertRouter = require('./routes/dessert')

// -----------------------------------(MiddleWare)
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// -----------------------------------(View Engine)
app.set('view engine', 'ejs')
// npm install express ejs --save
app.use(express.static('public'))
app.use('/fruits',fruitsRouter)

// -----------------------------------(Routes)
app.get('/',(req,res)=>{
    res.send("Welcome Home")
})
app.get('/home',(req,res)=>{
    res.render('Homepage')
})
// ------------------------------{RES.RENDER}

// ----------> [GET] => Retrieve Data from a server
app.get('/veggies',(req,res)=>{
    res.send("Hi Im the veggies")
})
// ----------> [GET] => Retrieve Data from a server
app.get('/dessert',(req,res)=>{
    res.send("Hi Im the desserts")
})
// ----------> [GET] => Retrieve Data from a server


app.listen(PORT,()=>{
    console.log(`Server is now Running...${PORT}`)
})

// create routers for each route inside the routes folder