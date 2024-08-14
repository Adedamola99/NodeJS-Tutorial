// var url = "www.goal.com";
// const EventEmitter = require('events');

// class Logger extends EventEmitter {
//     log(message) {
//         console.log(message);
    
//         this.emit('messageLogged', { id: 1, url: "http/" })
//     }
// }

const logger = (req, res, next) => {
    console.log('Logging');
    next();
}


module.exports = logger;