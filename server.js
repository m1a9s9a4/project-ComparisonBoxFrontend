const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 8081;
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function(res, req) {
    res.sendFile(__dirname + "/dist/index.html");
});
app.get(/.*/, function(res, req) {
    res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log('server started...');