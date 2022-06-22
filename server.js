//initial required bits & pieces:
const express = require("express")
const bodyParser= require('body-parser')
const app = express();
const cors = require('cors')
const {MongoClient, ObjectId } = require('mongodb')
require('dotenv').config()
const PORT = 8000

//stuff to be used:
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


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
        app.set('view engine', 'ejs')
    })


// The CRUD parts:

app.get(`/`, (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

// app.get(`/api/shoppinglist`, (req, res) => {
//     res.json(shoppingList)
// });

// Adding items to the list:
app.post('/shoppinglist', (req, res) => {
    console.log('Hellooooooooooooooooo!')
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


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