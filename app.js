var express = require("express");
var app = express();

app.use(express.static("public"));

app.get('/', function get() {
    // res.sendFile(__dirname + '/public/index.html');
    res.sendFile('/index.html');
});

app.listen(8000, function(){
    console.log("App started running on port 8000");
});