const http = require('http');
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
var express = require("express"); 
var app = express(); 
var path = require("path"); 

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.statusCode = 200;
  const path = require('node:path');
  const index = '/pages/index.html';
  const fs = require('node:fs');
  app.get('/',function(req,res){ 
    res.sendFile(path.join(__dirname+'/index.html')); 
    //__dirname : It will resolve to your project folder. 
  }); 
app.listen(3000); 
console.log("Server running at Port 3000"); 
  console.log(data);
});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});