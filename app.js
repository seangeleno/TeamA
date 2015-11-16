var express = require('express'),
        app = express(),
     logger = require('morgan'),
 bodyParser = require('body-parser'),
   mongoose = require('mongoose')

//establish connection to MongoDB
mongoose.connect('mongodb://localhost/')

//log requests made to app
app.use(logger('dev'))

//make json object available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//create root route
app.get('/',function(req, res){
  res.send('<h1 style="text-align:center;font-family:Avenir;color:rebeccapurple;background-color:lightgray;font-weight:200">Welcome to the homepage!</h1>')
})


app.listen(3000, function(){
  console.log('Server running on port 3000')
})
