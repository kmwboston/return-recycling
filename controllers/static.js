/**
 * Created by Tigjer on 1/19/16.
 */
var express = require('express')
var router = express.Router()

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))


router.get('/', function (req, res){
    res.sendfile('views/app.html')
})

module.exports = router

