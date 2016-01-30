// include and initialize the rollbar library with your access token
var rollbar = require("rollbar");
rollbar.init("dcf06dfd319c40638eeaa1b4d84329fd");

// record a generic message and send to rollbar
rollbar.reportMessage("Hello world!");

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


