// TODO: working with Amazon

const consts = require('./consts'),
      mongoose = require('mongoose');
      mongoose.Promise = global.Promise;
//The server option auto_reconnect is defaulted to true
var options = {
    server: {
        autoReconnect:true,
        useMongoClient:true,
    }
};

// mongoose.connect('mongodb+srv://dbUser:dbPass@lookup-v2vtv.mongodb.net/test?retryWrites=true', {dbName: 'testDB'});
mongoose.connect(consts.MLAB_KEY, options);
const conn = mongoose.connection;//get default connection

// Event handlers for Mongoose
conn.on('error', (err) => {
    console.log('Mongoose: Error: ' + err);
});
conn.on('open', () => {
    console.log('Mongoose: Connection established');
});
conn.on('disconnected', () => {
    console.log('Mongoose: Connection stopped, recconect');
    mongoose.connect(consts.MLAB_KEY, options);
});
conn.on('reconnected', () => {
    console.info('Mongoose reconnected!');
});