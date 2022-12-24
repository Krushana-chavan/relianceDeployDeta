const {Schema,model}= require('mongoose');
const UserSchema = new Schema({
    image_url:String,
    name:String,
    price:Number

});

const maxmenlModel= model('maxmen',UserSchema)
module.exports=maxmenlModel;