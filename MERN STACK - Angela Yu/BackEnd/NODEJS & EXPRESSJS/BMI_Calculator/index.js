const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/bmiCalculator",function(req,res){
  var n1=Number(req.body.w);
  var n2=Number(req.body.h);
  var result=n1/Math.pow(n2,2);
  res.send("<h1>BMI RESULT :"+result+"</h1>");
});

app.listen(3000,function(){
  console.log("I am running");
});
