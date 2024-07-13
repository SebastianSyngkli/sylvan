const mongoose = require('mongoose');

const  itemSchema = mongoose.Schema({
    costs: String,
    child: String,
    adult: String,
    wedding: String,
    party: String,
    roomname: String,
    category: String,
    roomspecification: String,
    maxbed:String,
    maxguest: String,
    image: Object
})
 
const itemModel = mongoose.model('items', itemSchema);
module.exports = itemModel