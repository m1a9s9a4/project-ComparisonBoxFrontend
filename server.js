const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 8081;
const app = express();

app.use(express.static(__dirname + '/dist/'));
console.log("process.env.API_URL");
console.log(process.env.API_URL);
console.log(process.env.VUE_APP_API_URL);
app.get(/.*/, function(res, req) {
    res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);
console.log('server started...');