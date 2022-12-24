const {Schema,model}= require('mongoose');
const UserSchema = new Schema({
    image_url:String,
    name:String,
    price:Number

});

const maxgirlModel= model('maxgirl',UserSchema)
module.exports=maxgirlModel;