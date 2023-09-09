const express = require('express');
const app = express();
const port = 3000;

const path = require('node:path');

app.use(express.static('public'));

/* app.use(express.static(path.join(__dirname, '..', 'public','css')));
console.log(path.join(__dirname, '..', 'public','css'))
app.use(express.static(path.join(__dirname, '..', 'public','js'))); */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..','public','index.html'));
});

app.listen(port,()=>{
    console.log(`Server online on port: ${port}`);
});