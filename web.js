var express = require('express');
var fs = require('fs');

var indexFileName = 'index.html';
var app = express.createServer(express.logger());
var indexFileBuf = fs.readFileSync(indexFileName);

app.get('/', function(request, response) {
  response.send(indexFileBuf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
