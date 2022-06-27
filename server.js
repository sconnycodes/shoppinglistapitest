//initial required bits & pieces:
const express = require("express")
const bodyParser= require('body-parser')
const app = express();
const cors = require('cors')
const {MongoClient, ObjectId } = require('mongodb')
require('dotenv').config()
const PORT = 8000

//stuff to be used, middleware etc:
// app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.set('view engine', 'ejs')

// Gotta listen out for stuff: 
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

// Database connection:
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'macshoppinglist',
    collection

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to database`)
        db = client.db(dbName)
        collection = db.collection('shoppinglist')
        
    })
    .catch(error => {console.error(error)});


// The CRUD parts:
// get
app.get(`/`, (req, res) => {
    // res.sendFile(__dirname + "/index.html")
    collection.find().toArray()
        .then(results => {
            console.log(results)
            res.render("index.ejs", { shopping : results })
        })
        .catch(error => console.error(error))
        
    
});



// Adding items to the list:
app.post('/shoppinglist/add', (req, res) => {
    console.log(req.body)
    collection.insertOne(req.body)
    .then(result => {
        console.log(result)
        res.redirect("/")
    })
    .catch(error => console.error(error))
});

// Editting items (PUT):
app.put('/shoppinglist/edit', (req, res) => {
    console.log(req.body)
  })


// Delete item:


// const shoppingList = [
//     {
//         "category": "household",
//         "item": "dishwasher powder"
//     },
//     {
//         "category": "fresh meat",
//         "item": "chicken"
//     },
//     {
//         "category": "frozen",
//         "item": "chips"
//     },
// ]