const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.all('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'node.html'))
});

app.use((req, res) => {
  res.send('<h1>Sorry, this site you requested does not exist!!1</h1>')
})

app.listen(3000);
console.log('The server is listening at port 3000');