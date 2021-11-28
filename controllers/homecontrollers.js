// handling all controllers
const express=require("express");

// acessing required data base
const db=require("../config/mongoose");

const todo_db=require("../models/todolist")

const app=express();


// dealing with all our controllers

// after request from route this will just put all the date in our ejs template file
module.exports.profile=function(req,res){
     todo_db.find({},function(err,todo_scs){
        if(err)
        {
           console.log("error in fetching todolist");
           return;
        }
        
      return res.render("home",{
         list_todo:todo_scs
     });
     });

      


}



// adds new todolist in data base and redirects back making sure the new task to display as well
module.exports.postalldata=function(req,res){

   
   todo_db.create({

      description:req.body.description,
   
      date:req.body.dat,
       category:req.body.categ
   

   },function(err,newtodo){
      if(err)
      {
         console.log("error in creating a todo:");
         return;
      }
      console.log("created new task:",newtodo);

   })
   return res.redirect("/");


}

// handling delet through checboxes,checked checkboxes are deleted
module.exports.deletetodo=function(req,res){
    
   

   Object.keys(req.body).forEach(function(key){
      todo_db.findByIdAndDelete(key,function(err){
         if(err)
         {
            console.log("error in finding the id",err);
            return res.redirect("/");
            
         }
      })
      
   }) 
  

  
 
   return res.redirect("/");

}