var http = require('http');
var fs = require('fs');

var server = http.createServer( (req, res) => {

  fs.readFile('index.html', (err, data) => {

    //res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);

    res.end();
  })


});

server.listen(3000);