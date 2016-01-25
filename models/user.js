/**
 * Created by Tigjer on 1/19/16.
 */
var db = require('../db')
var user = db.model('User', {
    username: { type: String, required: true },
    password: { type: String, required: true, select: false }
})
module.exports = db.model('User', user)