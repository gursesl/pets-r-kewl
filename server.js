/* eslint no-console: "off" */
const app = require('./lib/app');
const http = require('http');

const connect = require('./lib/connect');
const dbUri = process.env.MONGODB_URI;
connect(dbUri);

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, () => {
    console.log('server running on', server.address());
});
