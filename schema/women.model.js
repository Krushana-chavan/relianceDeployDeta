const {Schema,model}= require('mongoose');
const UserSchema = new Schema({
    image_url:String,
    name:String,
    price:Number

});

const MaxwomenModel= model('women',UserSchema)
module.exports=MaxwomenModel;