var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }


  cluster.on('online', (worker) => {
    console.info(`Worker ${worker.process.pid} is online`);
  })

  cluster.on('listening', (address) => {
    console.info(`Worker is listening`);
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  })
} else {
  http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`process ${process.pid} says hello!`);
      })
      .listen(3000);
}