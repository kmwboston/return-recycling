/**
 * Created by Tigjer on 1/19/16.
 */
var db = require('../db')
var Item = db.model('Item', {
    name: { type: String, required: true },
    size: { type: String, required: true },
    brand: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
})
module.exports = Item