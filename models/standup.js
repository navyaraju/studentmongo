const mongoose=require('mongoose')

const standupSchema=new mongoose.Schema({
    productname:{type:String},
    productdesc:{type:String},
    productprice:{type:Number},
    manudate:{type:Date,default:Date.now},
    expdate:{type:Date,default:Date.now},
    barcode:{type:Number},
    createdOn:{type:Date,default:Date.now}
})

module.exports=mongoose.model('Standup',standupSchema)
