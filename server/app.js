const express = require('express');
const app = express();
const port = 3000;

const path = require('node:path');

app.use(express.static('public'));
/* app.use('/dark', express.static('public'));
app.use('/light', express.static('public'));
app.use('change', express.static('public')); */

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'..','public','index.html'));
});

app.listen(port,()=>{
    console.log(`Server online on port: ${port}`);
});