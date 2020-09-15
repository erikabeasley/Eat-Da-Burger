// Import ORM
const orm = require('../config/orm.js');

const burgers = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    updateOne: (objColsVals, condition, cb) => {
        orm.updateOne('burgers', objColsVals, condition, (res) => cb(res));
    }
};

// Export DB functions
module.exports = burgers;