const express=require("express");
// setting up router
const router=express.Router();

const homec=require('../controllers/homecontrollers');
// all routes to our controllers
router.get("/",homec.profile);
 router.post("/addnewtodo",homec.postalldata);
 router.post("/deletechecked",homec.deletetodo);

module.exports=router;

console.log("router setup sucessfully");