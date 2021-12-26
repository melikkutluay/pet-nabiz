const db = require('../api/queryBuild')
const _ = require('lodash')
module.exports = {
    get: async function (tableName, data) {
        try {
            const queryBuilder = new db.exec(tableName)
            if (_.isUndefined(data)) {
                return await queryBuilder.select('*');
            } else {
                if (_.has(data, 'process_date')) {
                    return await queryBuilder.select('process','process_type','process_date','Name').whereBetween('process_date', Object.values(data.process_date)).join('pet', 'pet.id', '=', 'process.pet_id');
                } else {
                    return await queryBuilder.select('*').where(data);
                }
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    post: async function (tableName, data) {
        try {
            const queryBuilder = new db.exec(tableName)
            return await queryBuilder.insert(data)
        } catch (error) {
            throw new Error(error)
        }
    },
    put: async function (tableName, data) {
        try {
            const queryBuilder = new db.exec(tableName)
            return await queryBuilder.where({ id: data.id }).update(data)
        } catch (error) {
            throw new Error(error)
        }
    },
    delete: async function (tableName, data) {
        try {
            const queryBuilder = new db.exec(tableName)
            return await queryBuilder.where(data).delete()
        } catch (error) {
            throw new Error(error)
        }
    }
}