// required library
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/todolist_db");
// connecting to data base
const db=mongoose.connection;

db.on('error',console.error.bind(console,"error connecting db"));

db.once("open",function()
{
    // connected
    console.log("conncected to db sucessfully");
})