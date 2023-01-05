const express = require('express')
const app = express()

app.use(express.static('dist'))

app.use(express.json())

const pokemons = [
    {
      id: 1,
      name: "Pikachu",
      type: "electric ⚡️",
      level: 99,
    },
    {
        id: 2,
        name: "Umbreon",
        type: "Dark ⚡️",
        level: 100,
    },
    {
        id: 3,
        name: "Pichu",
        type: "electric ⚡️",
        level: 9,
    },
]
  
app.get("/api/pokemons", (req, res) => {
console.log("GET /api/pokemons")
res.send({pokemons: pokemons})
});

app.post("/api/pokemons", (req, res) => {
const data = req.body
console.log("POST /api/pokemons", data)
data.id = pokemons.length+1
pokemons.push(data)
res.send(data)
})


// After all other routes
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))
