const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// Create server
const server = http.createServer((req, res) => {

    //let path = url.parse(req.url, true).pathname.replace(/^\/+|\/+$/g, '');

    // Parse the url
    var parsedUrl = url.parse(req.url, true);

    // Get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get the query string as an object
    var queryStringObject = parsedUrl.query;

    // Get the HTTP method
    var method = req.method.toLowerCase();

    // Get the headers as an object
    let headers = req.headers

    // get payloads if there is any
    let decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', data => {
        buffer += decoder.write(data);
    });

    req.on('end', () => {
        // do everything else we were doing before

        // Send the response
        res.end('Hello World!\n');

        // Log the request/response
        console.log('The request was received with this payload: ', buffer);
    });
    
});

// Make server listen to the port 3000
server.listen(3000, () => {
    console.log('The server is listening at port 3000 now');
});