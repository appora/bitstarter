var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var html = new Buffer(fs.readFile('index.html'), "utf-8")
app.get('/', function(request, response) {
    response.send(html.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});