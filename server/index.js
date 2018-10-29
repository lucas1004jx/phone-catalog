const express = require("express");
const app=express();
const data = require("./phones.json");


app.get('/',(req,res)=>{
 res.send("Please use http://localhost 4000/api/phones to fetch all the phones' data");
})

app.get('/api/phones',(req,res)=>{
    res.send(data);
});

app.get('/api/apple',(req,res)=>{
    const iphone=data.filter((phone)=>phone.brand='apple');
    res.send(iphone);
});

app.get('/api/samsung',(req,res)=>{
    const samsumg=data.filter((phone)=>phone.brand==='samsung');
    res.send(samsumg);
}); 
app.get('/api/huawei',(req,res)=>{
    const samsumg=data.filter((phone)=>phone.brand==='huawei');
    res.send(samsumg);
});
app.get('/api/xiaomi',(req,res)=>{
    const samsumg=data.filter((phone)=>phone.brand==='xiaomi');
    res.send(samsumg);
});

app.get('/api/apple:model',(req,res)=>{
    let phone=data.filter((phone)=>
    phone.model.toLowerCase()===req.params.model.toLowerCase()&& phone.brand==='apple'
    )
    phone.length !==0 ? res.send(phone):res.status(404).send('Can´t find this phone !!')
});

app.get('/api/samsung/:model',(req,res)=>{
    let phone=data.filter((phone)=>
    phone.model.toLowerCase()===req.params.model.toLowerCase()&& phone.brand==='samsung'
    )
   phone.length !==0 ? res.send(phone):res.status(404).send('Can´t find this phone !!')
   
});
app.get('/api/huawei/:model',(req,res)=>{
    let phone=data.filter((phone)=>
    phone.model.toLowerCase()===req.params.model.toLowerCase()&& phone.brand==='huawei'
    )
   phone.length !==0 ? res.send(phone):res.status(404).send('Can´t find this phone !!')
   
});
app.get('/api/xiaomi/:model',(req,res)=>{
    let phone=data.filter((phone)=>
    phone.model.toLowerCase()===req.params.model.toLowerCase()&& phone.brand==='xiaomi'
    )
   phone.length !==0 ? res.send(phone):res.status(404).send('Can´t find this phone !!')
   
});
app.get('/api/:product',(req,res)=>{
    let phone=data.filter((phone)=>
    phone.product.toLowerCase()===req.params.product.toLowerCase()
    )
   phone.length !==0 ? res.send(phone):res.status(404).send('Can´t find this product !!')
   
});

// get image
app.use(express.static('public'));


const port = process.env.PORT || 4000
app.listen(port,()=>{console.log(`Listening on port ${port}...`);
});