var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, welcome to our first contained application!\n");
});

server.listen(8080);
console.log('Server is listening');

