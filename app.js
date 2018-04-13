var express = require('express');

var app = express();

app.get('/',(req,res)=>{
  res.send('this is the homepage');
});

app.get('/dashboard',(req,res)=>{
  res.send('this is the dashboard');
});


app.listen(3000);
