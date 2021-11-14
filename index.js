const express=require("express");
const port="8000";
const app=express();

// middle ware to parse data from the server
app.use(express.urlencoded());

// connecting to routes
app.use("/",require("./routes"));
// acessing controllers which deal with our http requests
app.post("/addnewtodo",require("./routes"));
app.get("/deletechecked",require("./routes"));


// setting up view engine
app.set("view engine","ejs");
app.set("views","./views");
// middle ware to acess all static files
app.use(express.static("assets"));

app.listen(port,function(err)
{
    if(err)
    {
        console.log("ther is a problem");
    }

    console.log("sucessful server created");
})