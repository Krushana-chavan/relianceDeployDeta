require("dotenv").config()
const express = require('express')
const  mongoose  = require('mongoose')
const applianceModel = require('./schema/appliance.model')
const soundbarModel = require('./schema/soundbar.model')
const UserModel = require('./schema/user.model')
const watchModel = require('./schema/watch.model')
 

const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())



app.get("/soundbar", async(req,res)=>{
try{ let sound = await soundbarModel.find({})
  
    res.send(sound)}
    catch(e){
        res.status(401).send("Invalid api")
    }
})

app.get("/watch", async(req,res)=>{
   try {let laptop = await watchModel.find({})
    res.send(laptop)}
    catch(e){
        res.status(401).send("Invalid api")
    }
})
app.get("/appliance", async(req,res)=>{
    try {let laptop = await applianceModel.find({})
     res.send(laptop)}
     catch(e){
        res.status(401).send("Invalid api")
     }
 })
 app.get("/laptop", async(req,res)=>{
    try {let laptop = await laptop.find({})
     res.status(200).send(laptop)
    }
     catch(e){
        res.status(401).send("Invalid api")
     }
 })

app.post("/signup",(req,res)=>{
   try {const{name,email,role,password,phonenumber}= req.body
    let user = new UserModel({name,email,role,password,phonenumber});
    user.save()
    res.send(user)}
    catch(e){
        res.status(401).send("Invalid creditional")
    }
})
app.post("/login",(req,res)=>{
    try {
        const{email,password,phonenumber}= req.body
    let user =  UserModel.findOne({email,password,phonenumber});
   
    res.send(user)}
    catch(e){
        console.log("error")
    }
})
mongoose.connect(process.env.db_url).then(()=>{
    app.listen(8080,()=>{  console.log('server statrted on port 8080')})
})
