const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
});

server.get("/", function(req, res) {
    return res.render("about");
});

server.get("/portifolio", function(req, res) {
    return res.render("portifolio");
});

server.get("/layout", function(req, res) {
    return res.render("layout");
});

server.listen(5000, function() {
    console.log("server is running");
});