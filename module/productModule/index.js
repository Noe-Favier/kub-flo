const http = require("http");

console.log("[SERVER]: Starting productModule server on :8080");
http
    .createServer(function (req, res) {
        res.write(JSON.stringify({message: "Hello from productModule"})); //write a response to the client
        console.log("[SERVER]: New Request: ", req.url);
        res.end(); //end the response
    })
    .listen(8080); //the server object listens on port 8080