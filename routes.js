function requestHandler (req,res) {

    const url = req.url;
    const method = req.method;
    const users = [];

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome to Get Users</title><head>');
        res.write('<body><form action="/users" method="GET"><button type="submit">Get Users</button></form></body>');
        res.write('<body><form action="/create-user" method="POST"<input type="text" name="username"><button type="submit">Create User</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Here is a list of Current Users</title><head>');
    }

    if (url === '/create-user' && method === 'POST')  {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            users.push(username);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        });
        
    }


}

module.exports = requestHandler;