const express = require('express');
const app = express();
const port = 3000;

const greet = require('../routes/greet');
const count = require('../routes/count');
const about = require('../routes/about');

app.use('/', greet);
app.use('/', count);
app.use('/', about);

app.listen(port,()=>{
    console.log(`Server online on port: ${port}`);
});