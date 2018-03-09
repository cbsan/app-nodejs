var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/abc/:id', function (req, resp) {
  resp.send('Hi!!! '+req.params.id);
});

app.listen(3000, function() {
  console.info('App rodando na porta 3000');
})