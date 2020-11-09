// jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
  res.send("Home");
});

app.listen(3000, function(){
  console.log("The server is running on port 3000.");
});
