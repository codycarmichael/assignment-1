const http = require('http');
const routes  = require('https://github.com/codycarmichael/assignment-1/blob/main/routes.js');
const server = http.createServer(routes);
server.listen(3000);