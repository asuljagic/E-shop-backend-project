const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;
app.get('/', (req,res) => {
    res.send('hello API!');
})
app.listen(3000, () => { 
    console.log(api);
    console.log('server is srunning http://localhost:3000');
}) 