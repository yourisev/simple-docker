const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send("Welcome to Docker beginnings!");
});

app.listen(3000, function (){
    console.log("App listening on port 3000")
});