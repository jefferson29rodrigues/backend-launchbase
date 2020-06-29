const express = require('express');
const server = express();

server.get("/", function(req, res) {
    return res.send("Hello World! Jeff and julian");
});

server.listen(5000, function() {
    console.log("server is running");
});