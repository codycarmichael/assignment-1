const http = require('http');
const routes  = require('codycarmichael/assignment-1/routes.js');
const server = http.createServer(routes);
server.listen(3000);