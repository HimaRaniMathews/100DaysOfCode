const express=require("express");
const app=express();
app.get("/",function(req,res){
res.send("<h1>Hello Hima</h1>");
});
app.get("/contact",function(req,res){
res.send("<h2>himaranimathews@gmail.com</h2>");
});
app.listen(3000,function(){
  console.log("I am running")
});
