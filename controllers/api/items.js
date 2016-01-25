/**
 * Created by Tigjer on 1/19/16.
 */

var Item = require('../../models/item')
var router = require('express').Router()

router.get('/', function (req, res, next) {
    Item.find()
    .exec(function(err, items){
        if(err) {return next(err)}
        res.json(items)
    })
})

router.post('/', function(req, res, next) {
    var item = new Item({
        name:req.body.name,
        size:req.body.size,
        brand:req.body.brand,
        type:req.body.type
    })
    item.save(function(err, item){
        if(err) {
            return next(err)
        }
        res.send(201, item)
    })
})

module.exports = router
