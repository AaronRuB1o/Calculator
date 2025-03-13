import { createServer } from 'node:http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import http from 'http';     
import fs from 'fs';    
import path from 'path';     

const server = createServer((req, res) => {
    const filePath = path.join(__dirname, 'main.html');  // Path to your HTML file
  
    // Check if the file exists
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        // If there's an error (e.g., file not found), send a 500 error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading the HTML file.');
        return;
      }
      
      
      // If the file is found, send it with the correct content type
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
});
// starts a simple http server locally on port 3000
server.listen(3000, () => {
  console.log('Listening on LocalHost');
});