const config = require('./config')
exports.queryClass = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: config.database
    },
    useNullAsDefault: true,
});
exports.exec = class {
    constructor(table) {
        let queryBuilder = queryClass(table);
        return queryBuilder
    }
};