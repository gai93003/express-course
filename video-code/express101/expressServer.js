// NODEHS is the language
// Express is node, a node module

const path = require('path');

// http is a native module

// express is a third party module
const express = require('express');

// An 'app' is the express function(createApplication inside the Express module)
// invoked and is an Express application.
const app = express();

app.use(express.static('public'));

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested

app.all('/',(req, res) => {
  // Express handles the basic headers (status code, mime-type) ! Awesome!
  // res.send(`<h1>This is the home page haha</h1>`);
  res.sendFile(path.join(__dirname + '/node.html'));

  // Express handles the end! Awesome
});

app.use((req, res) => {
  res.send("<h1>Sorry, this page does not exist!!!!!");
});

app.listen(3000);
console.log("The server is listening on port 3000")