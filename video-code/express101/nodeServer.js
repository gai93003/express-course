// http is native to NodeJS. So we just have to ask for it, we don't need to install it.
const http = require("http");

// fs = file system module! fs is built into Node. See above

const fs = require('fs');

// the http module has a createServer method

// takes 1 argv:

// 1. callback, callback, has 2 args: req, res

const server = http.createServer((req, res) => {
  console.log('The frontend is requesting using:', req.url)
  if (req.url === '/') {
    // console.log(req);

      // res = our way of responding to the requester
      // http message consists of:
        // 1. start-line -  CHECK 
        // 2. header
        // 3. body

      // wrieteHead takes 2 args:
      //   1. status code
      //   2. object for the mime-type

      res.writeHead(200, {'content-type': 'text/html'});
      const homePageHTML = fs.readFileSync('node.html');
      res.write(homePageHTML);
      res.end();
  } 
  else if (req.url === '/node.png') {
    res.writeHead(200, {'content-type': 'image/png'});
    const image = fs.readFileSync('node.png');
    res.write(image);
    res.end();
  }
  else if (req.url === '/styles.css') {
    res.writeHead(200, {'content-type': 'text/css'});
    const css = fs.readFileSync('styles.css');
    res.write(css);
    res.end();
  }
  else {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write("<h1>Sorry, this isn't the page you're looking for!");
    res.end();
  }
  

});

// createServer returns an object with a listen method
// listen takes 1 argv:
// 1. port listen for http traffic on

server.listen(3000);