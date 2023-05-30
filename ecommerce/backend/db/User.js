const mogoose= require('mongoose');
const useSchema= new mogoose.Schema({

    name: String,
    email: String,
    password: String
})
module.export = mogoose.model("users",useSchema);