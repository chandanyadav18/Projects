const express= require("express")
require('./db/config');
const User= require("./db/User")
const Product=require("./db/Product")
const cors=require("cors");
const app=express();
app.use(cors());
//const mogoose= require('mongoose');


app.post("/register", async(res,resp)=>{
    const user=new User(req.body);
    let result= await user.save();
    resp.send(result);

    
})

app.post('/login',async(res,req)=>{
   if(req.body.password && req.body.email) {
    let user =await User.findOne(req.body).select("-password");
    if(user){
        resp.send(user)
    }else{
        resp.send({result: "No User found"})
    }
   } else{
    resp.send({result:"No user found"})
   }
})
app.post("/add-product",async(req,resp)=>{
    let product=new Product(req.body)
    let result=await product.save();
    resp.send(result)
})
app.post("products/",async(req,resp)=>{
    let products=await Product.find();
    if(products.length>0){
        resp.send(products)
    }else{
        resp.send({results:"not found"})
    }
})
app.delete("/product/:id",async(req,resp)=>{
    const result=product.deleteOne({_id:req.params.id})
    resp.send(result);
})
app.get("/product/:id",async(req,res)=>{
    let result=await Product.findOne({_id:req.params.id});
    if(result){
        resp.send(result)
    }else{
        resp.send({result:"No record found"})
    }
})
app.put("/product/:id",async(req,res)=>{
    let result=await Product.updateOne(
        {_id:req.params.id},
        {$set : req.body}
       
         );
         resp.send(result)
    })
    app.get("/search/:key",async(req,resp)=>{
        let result=await Product.find({
            "$or":[{
                name:{$regex:req.params.key}
            }]
        });
        resp.send(result)
    })
            



app.listen(5000);