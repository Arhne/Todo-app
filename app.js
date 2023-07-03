//jshint esversion:7
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let todoLists = [];

app.get("/", function(req, res){
res.render ("index",
{fName: "darkMode()", 
todoLists: todoLists,


noOfTodoLists: todoLists.length
}
);
});

app.post("/", function(req, res){
const list = req.body.info;

todoLists.push(list);
res.redirect("/");
});



app.listen(3000, function(){
    console.log("server is running on port 3000");
});