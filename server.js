const express = require("express")
const path = require("path")
const urllib = require("urllib")

const app = express()

app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))

app.get("/sanity" , function(req , res){
    res.send("OK")
})

app.get("/recipe", function (req, res) {
    const ingredient = req.query.ingredient
    let recipeURL = `http://recipes-goodness.herokuapp.com/recipes/${ingredient}`
    urllib.request(recipeURL, function (err, data) {
        recipeRawData = JSON.parse(data)
        res.send(recipeRawData)
    })
})


const port = 8080

app.listen(port, function () {
    console.log(`App is listeninig on port ${port}`)
})