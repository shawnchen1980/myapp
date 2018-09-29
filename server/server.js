var express = require("express");
var app = express();
var http = require("http");
var cors = require("cors");
var key = require("./config/keys.js");
console.log(key.secret);
app.use(cors());

var server = http.createServer(app);
// console.log(process.env.NODE_ENV);
// console.log(process.env.other);
// console.log(process.argv.other);
server.listen(4000);
console.log("server is listening at 4000");
