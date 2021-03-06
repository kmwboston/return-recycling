var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use('/api/items', require('./controllers/api/items'))
app.use(require('./controllers/static'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))
app.use(require('./auth'))

app.listen(3000, function () {
    console.log('Server listening on', 3000)
})