var http = require('http');
var fs = require('fs');

var server = http.createServer( (request, response) => {

  fs.readFile('index.html', (err, data) => {

    response.write(data);
  
    response.end();
  })
  //response.writeHead(200, {'Content-type:': 'text/html'});


});

server.listen(3000);