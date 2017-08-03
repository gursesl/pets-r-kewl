/* Let's connect to mongo once here */
require('dotenv').config('tests/test.env');

const connect = require('../../lib/connect');

let connection = null;

before(() => {
    return connect(process.env.MONGODB_URI)
        .then(cn => connection = cn);
});

after(() => connection.close());
