const http = require('http');


const server = http.createServer((req, res) => {



    console.log(`Getting the url : ${req.url} getting the method used : ${req.method}`);

    //setting what type of data is sent  back to the browser
    
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    //content sent to the browser
    res.write('<p>This was sent from a server</p>');

    //ending the response of data sent tp the browser
    res.end();

});


server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
});