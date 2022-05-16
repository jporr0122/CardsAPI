const express = require('express')
const app = express()
const playerData = require("./stlcards.json")

let port = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.sendFile(__dirname +"/index.html")
})

app.get("/players", (req, res) =>{
	res.send(playerData)
})

app.get("/players/pitchers", (req, res) =>{
	res.send(playerData.pitchers)
})

app.get("/players/catchers", (req, res) =>{
	res.send(playerData.catchers)
})

app.get("/players/infielders", (req, res) =>{
	res.send(playerData.infielders)
})

app.get("/players/outfielders", (req, res) =>{
	res.send(playerData.outfielders)
})

app.listen(port, () => {
	console.log(`App is listening to port ${port}`)
})