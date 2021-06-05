const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const api = require('./router/api');
const app = express();
app.use(bodyParser.json());

app.use('/api', api);
app.get('/', function (req, res) {
    res.send("hello from server")
});

app.listen(port, function () {
    console.log(port);
})