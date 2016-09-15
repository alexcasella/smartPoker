var express = require("express");
var app = express();

app.use(express.static("public"));

// app.get('/', function get(req, res) {
//     // res.sendFile(__dirname + '/public/index.html');
//     res.sendFile('/index.html');
// });
//
// app.get('/control_panel', function get(req, res) {
//     // res.sendFile(__dirname + '/public/control_panel.html');
//     res.sendFile('/control_panel.html');
// });

app.listen(8000, function(){
    console.log("App started running on port 8000");
});