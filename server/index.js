const express = require("express");
const app=express();
const data = require("./phones.json");


app.get('/',(req,res)=>{
 res.send("Please use htto://localhost 4000/api/phones to fetch all the phones' data");
})

app.get('/api/phones',(req,res)=>{
    res.send(data);
});

app.get('/api/iphone',(req,res)=>{
    const iphone=data.filter((phone)=>phone.brand='iphone');
    res.send(iphone);
});

app.get('/api/samsung',(req,res)=>{
    const samsumg=data.filter((phone)=>phone.brand==='samsung');
    res.send(samsumg);
}); 

app.get('/api/iphone/:model',(req,res)=>{
    let phone=data.filter((phone)=>
    phone.model.toLowerCase()===req.params.model.toLowerCase()&& phone.brand==='iphone'
    )
    phone.length !==0 ? res.send(phone):res.status(404).send('Can´t find this phone !!')
});

app.get('/api/samsung/:model',(req,res)=>{
    let phone=data.filter((phone)=>
    phone.model.toLowerCase()===req.params.model.toLowerCase()&& phone.brand==='samsung'
    )
   phone.length !==0 ? res.send(phone):res.status(404).send('Can´t find this phone !!')
   
});

// get image
app.use(express.static('public'));


const port = process.env.PORT || 4000
app.listen(port,()=>{console.log(`Listening on port ${port}...`);
});