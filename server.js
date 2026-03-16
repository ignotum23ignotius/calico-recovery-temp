const { createServer } = require('node:http');

const hostname = 'calico-recoveru-b6bbb7b2f8bshzdq.swedencentral-01.azurewebsites.net';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
