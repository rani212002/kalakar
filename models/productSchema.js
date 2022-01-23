var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: { type: String, required: [true, 'product name is required'] },
    description: { type: String },
    images: [String],
    price: { type: Number, required: [true, 'price is required'] }
});
module.exports = mongoose.model('product', productSchema);