var express = require('express');

var app = express();

app.use('/static', express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, resp) {
  resp.render('index');
});

app.listen(3000, function() {
  console.info('App rodando na porta 3000');
});