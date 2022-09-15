const https = require("https");
const fs = require("fs");
const express = require('express');
const { throws } = require("assert");
const app = express();
const PORT = 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log('GET...');
    console.log('req.httpVersion', req.httpVersion);
    console.log('req.rawHeaders', req.rawHeaders);
    res.send("GET Request Called\n");
});

app.post('/', (req, res) => {
    console.log('POST...');
    console.log('req.httpVersion', req.httpVersion);
    console.log('req.rawHeaders', req.rawHeaders);
    try {
      console.log('try');
      res.status(0).send('OK');
    } catch (error) {
      console.log('catch');
    }
    res.status(0).send("POST Request Called\n");
});

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
};

https
  .createServer(options, app)
  .listen(PORT, ()=>{
    console.log("Server listening on PORT", PORT)
  });

// app.listen(PORT, ()=>{
//   console.log("Server listening on PORT", PORT)
// })
