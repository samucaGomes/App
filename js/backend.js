var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


  var desabafos = [{id:"1", nome:"joao", titulo:"Por que cebola?", desabafo:"Odeio cebolaaaaaaaaaa"},
  {id:"2", nome:"pedro", titulo:"Bobagem", desabafo:"AAAAAAAAAAAAAAAAAAHHHHHHHHHHH"},
  {id:"3", nome:"mateus", titulo:"PAÇOCA", desabafo:"heuaheuaheuhaeuHUHEAUHEAUEHA"}];

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/desabafos', function(req, res){
  res.json(desabafos);
});

app.post('/desabafos', function(req, res){
  var desabafo = req.body;
  desabafos.push(desabafo);
  res.json(true);
});
app.listen(3412);