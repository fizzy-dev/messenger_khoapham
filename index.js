var express=require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

var server=require("http").Server(app);
var io= require("socket.io")(server);
server.listen(3000);

var Users=[];

io.on("connection",function(socket){
  console.log("co nguoi truy cap:"+socket.id);
  socket.on("client-send-data",function(data){
    if(Users.indexOf(data)>=0)
    {
    	socket.emit("server-send-dkithatbai");
    }else{

    	
    }
  })
});
app.get("/",function(req,res){
  res.render("home")
});
