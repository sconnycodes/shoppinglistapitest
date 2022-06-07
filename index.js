const express = require("express")
const app = express();

app.use(express.json())

const shoppingList = [
    {
        "category": "household",
        "item": "dishwasher powder"
    },
    {
        "category": "fresh meat",
        "item": "chicken"
    },
    {
        "category": "frozen",
        "item": "chips"
    },
]


app.get(`/api/shoppinglist`, (req, res) => {
    res.json(shoppingList)
});


const PORT = 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
