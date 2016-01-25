/**
 * Created by Tigjer on 1/19/16.
 */
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/recycle', function() {
    console.log('mongodb connected')
})

module.exports = mongoose