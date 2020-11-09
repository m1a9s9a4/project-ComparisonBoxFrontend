const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const port = process.env.PORT || 8081;
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.use(helmet());

app.get(/.*/, function(res, req) {
    res.sendfile("index.html");
});

app.listen(port);
console.log('server started...');