var http = require('http'),
    fs = require('fs'),
    server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === "/") {
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    }
    else {
        response.statusCode = 404;
        response.write('<h1>Zly adres!</h1>');
        response.write('<img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/25489/image/pac-404.png">');
        response.write('<img src="img/error.jpg">');
        response.end();
    }
});

server.listen(8080);