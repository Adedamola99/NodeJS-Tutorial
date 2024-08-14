// const os = require("os");
// const path = require("path");
// const fs = require("fs");
// const EventEmitter = require('events');
// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// })

// logger.log('message')


// fs.readdir("$", function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log("Result", files);
// })
// const pathObj = path.parse(__filename);
// const total_memory= os.totalmem;
// const free_memory = os.freemem;

// console.log(pathObj);
// console.log(`Total Memory is ${total_memory}`);
// console.log(`Free Memory is ${free_memory}`);

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write('Hello World');
        res.end();
    }
});

server.listen(3000)

console.log("Listening on port 3000...");