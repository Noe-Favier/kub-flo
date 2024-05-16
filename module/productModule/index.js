const http = require("http");

http
    .createServer(function (req, res) {
        res.write("Hello World!"); //write a response to the client
        console.log("object mon gars");
        res.end(); //end the response
    })
    .listen(8080); //the server object listens on port 8080