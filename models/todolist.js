const mongoose=require("mongoose");
// our todolist schema
const todolistschema=new mongoose.Schema({

    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },




})

const todo_sc=mongoose.model("todo_sc",todolistschema);
module.exports=todo_sc;