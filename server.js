const express = require('express');
const app = express();
const PORT = 3000;

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
    // res.send("POST Request Called\n");
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
}); 