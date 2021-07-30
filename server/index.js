const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())


app.get("/api/users", (req, res) => {
    let friends = ['greg', 'olive', 'terra', 'steve', 'vali']
    res.status(200).send(friends)
})

// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`
//     res.status(200).send(phrase)
// })

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params
    const phrase = `<h3>It was ${temperature} today</h3>`
    res.status(200).send(phrase)

})
app.get("/fruit/:array", (req, res) => {
    const {array} = req.params
    const phrase = `<h1 style = "color: pink; background-color: black"> I think I understand this. ${array} is the fruit you should add to your drank!</h1>`
    res.status(200).send(phrase)
}) 

app.listen(4000, () => console.log("Server running on port 4000"))