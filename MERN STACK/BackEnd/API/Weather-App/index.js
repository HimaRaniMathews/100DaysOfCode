const express=require("express");
const https=require("https");
const bodyParser=require("body-Parser")
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  const query=req.body.CityInput;
  const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid=b74d271441741757077131d6aec39a9f";
  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data)
      {
      const weatherData=JSON.parse(data);
      const temp=weatherData.main.temp;
      const desc=weatherData.weather[0].description;
      const icon=weatherData.weather[0].icon;
      const imageURL="https://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<h1>Temperature of Place "+query+": "+temp+" degree Celsius</h1>");
      res.write("<h2>Description : "+desc+"</h2>");
      res.write("<img src="+imageURL+">");
      res.send();
      })
  })

});

app.listen(3000,function(){
  console.log("I am running");
});
