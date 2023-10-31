const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`Getting the url : ${req.url} getting the method used : ${req.method}`);

    //setting what type of data is sent  back to the browser

    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    //path we want to read from
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;

        case '/aboutus':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            //ending the response of data sent to the browser
            res.end()
        } else {
            //content sent to the browser if wriritng multiple things
            // res.write(data);

            //ending the response of data sent to the browser
            res.end(data);
        }
    });


});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
});