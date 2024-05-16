const http = require("http");

/* LOGS SETUP */
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream('/var/product.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) {
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};
/* --------- */


console.log("[SERVER]: Starting productModule server on :8080");
http
    .createServer(function (req, res) {
        res.write(JSON.stringify({message: "Hello from productModule"})); //write a response to the client
        console.log("[SERVER]: New Request: ", req.url);
        res.end(); //end the response
    })
    .listen(8080); //the server object listens on port 8080