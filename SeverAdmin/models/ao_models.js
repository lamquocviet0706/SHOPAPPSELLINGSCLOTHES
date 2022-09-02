const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id:{type: ObjectId},
    name:{type:String},
    price:{type:Number},
    amount:{type:Number},
    date:{type:Date},
    avatar:{type:String},
})

module.exports = mongoose.model('product',productSchema);