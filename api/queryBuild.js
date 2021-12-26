const config = require('./config')
const queryClass = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: config.database
    },
    useNullAsDefault: true,
});
const exec = class {
    constructor(table) {
        let queryBuilder = queryClass(table);
        return queryBuilder
    }
};
module.exports = {
    queryClass,
    exec
};