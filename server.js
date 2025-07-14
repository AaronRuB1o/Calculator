const http = require("http");
const url = require("url");
const fs = require("fs");

const lookup = require("mime-types").lookup;

const server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true);
    let path = parsedUrl.path.replace(/^\/+|\/+$/g, "");

    if (path == ""){
      path = "main.html";
    }

    console.log(`Requested path ${path} `);  
    // Check if the file exists
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // If there's an error (e.g., file not found), send a 500 error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading file.');
        return;
      }
      
        console.log(`Returning ${path}`);
        res.setHeader("X-Content-Type-Options", "nosniff");
        let mime = lookup(path);
        res.writeHead(200, { "Content-type": mime });
        res.end(data);
    });
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});