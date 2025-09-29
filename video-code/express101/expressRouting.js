const express = require('express');
const app = express();

// app object has a few methods:
// HTTP verbs! REST verbs!
//CRUD  app correspondence!
// 1. get   THIS IS THE DEFAULT REQUEST......
// 2. post
// 3. delete
// 4. put

// Take 2 args:
// 1. path
// 2. callback to turn if an HTTP request that matches THIS verb is made to the path in #1

app.all('/', (req, res) => {
  res.send(`<h1>Welcome to the home page!`);
})

app.get('/', (req, res) => {

})
app.post('/', (req, res) => {
  
})
app.delete('/', (req, res) => {
  
})
app.put('/', (req, res) => {
  
})

app.listen(3000);
console.log("Server listening on port 3000");