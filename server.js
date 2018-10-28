var http = require("http");
var data = require("./data/phones.json");

http.createServer(function(req,res){
    if(req.url === "/api/phones"){
        res.writeHead(200,{"Content-Type":"text/json"});
        res.end(JSON.stringify(data));    
    }else if(data.url === "/api/iphone"){
       listenIphone(res);
    }else if(req.url==="/api/samsumg"){
     listenSamsumg(res);
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Whooops....Fail to find data.Please use localhost:4000/api/phones to fetch all the phones´ data");
    }
   
}).listen(4000);

function listenIphone(res){
    res.writeHead(200,{"Content-Type":"text/json"});
 var iphone = data.filter((phone)=>phone.name=="iphone");
 res.end(JSON.stringify(iphone));
}

function listenSamsumg(res){
    res.writeHead(200,{"Content-Type":"text/json"});
    var samsumg=data.filter((phone)=>phone.brand=="samsumg");
    res.end(JSON.stringify(samsumg));
}
console.log('Server listening on port 4000');
