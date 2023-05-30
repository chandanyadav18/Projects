const mogoose= require('mongoose');
const productsSchema= new mogoose.Schema({

    name: String,
    price: String,
    catagory: String,
    userId:String,
    company:String
})
module.export = mogoose.model("products",productsSchema);