const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

// const Productschema = new Schema({
//   sku: {type: String,required: true},
//   imagecolection: {type: Array, required: true},
//   pname: {type: String,required: true},
//   qty: {type: Number,required: true},
//   price: {type: Number,default:25 },
//   discription : {type: String,required: true},
//   favourite : {type: Number,default: 0}, 
// });


const Productschema = new Schema({
  sku: {type: String,required: true},
  selectedFile:{type: String,required: true},
  pname: {type: String,required: true},
  qty: {type: Number,required: true},
  price: {type: Number,default:25 },
  discription : {type: String,required: true},
  favourite : {type: Number,default: 0}, 
});
// Productschema.plugin(uniqueValidator);
module.exports = mongoose.model('Product',Productschema);