

var express = require('express');
var app = express();
var multer = require("multer");
var upload = multer();
var fs = require('fs');

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/file", upload.single('file'), function(req, res){

  res.send({
    "size": req.file.size + " bytes"
           });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
