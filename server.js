const express = require('express');
const app = express();
const port = '3000';

app.use(express.json());

app.get('/',(req, res) =>{
    res.send('funciona')
});

app.listen(port,() => {
    console.log("servidor corriendo", port)
});