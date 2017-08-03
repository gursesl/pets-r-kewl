const db = require('./db');
const request = require('./request');
const assert = require('chai').assert;

describe('stores api', () => {
    
    before(db.drop);
    
    let token = '';    
    before(() => db.getToken().then(t => token = t));
    
    it('initial /GET returns empty list', () => {
        return request.get('/api/stores')
            .set('Authorization', token)
            .then(req => {
                const stores = req.body;
                assert.deepEqual(stores, []);
            });
    });

});
