const express = require('express');
const app = express();

// app comes with a use method
// user takes 1 arg: which is the method where you want to add
app.use(express.static('public'));

app.listen(3000);
console.log('Server listening on port 3000');