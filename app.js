//
var express = require('express');
var app     = express();

app.get('/',function(req, res){
  res.send('<h1 style="text-align:center;font-family:Impact;color:rebeccapurple">Welcome to the homepage!</h1>')
})


app.listen(3000, function(){
  console.log('Server running on port 3000')
})
