const {Schema,model}= require('mongoose');
const UserSchema = new Schema({
    image_url:String,
    name:String,
    price:Number

});

const BoyModel= model('boy',UserSchema)
module.exports=BoyModel;