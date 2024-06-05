const express = require('express');
const app = express();
const PORT = 2061;
app.get('/', (req, res) => {
  res.send('Hello World!');
});




app.listen(2061,(req,res)=> {
    console.log('Server is running on port 2061');
});