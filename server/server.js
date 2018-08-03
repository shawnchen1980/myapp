var express=require('express')
var app=express()
var http=require('http')
var cors=require('cors')

app.use(cors())



var server=http.createServer(app)

server.listen(4000)
console.log("server is listening at 4000")