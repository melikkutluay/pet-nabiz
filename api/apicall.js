const db = require('../api/queryBuild')
const _ = require('lodash')
module.exports = {
    get: async function (tableName, data) {
        try {
            if (_.isUndefined(data)) {
                const queryBuilder = new db.exec(tableName)
                return await queryBuilder.select('*');
            } else {
                if (_.has(data, 'process_date')) {
                    let {
                        first_time,
                        second_time
                    } = data.process_date
                    const rawQuery = db.queryClass
                    return rawQuery.schema.raw(`select p1.process, p1.process_type, p1.process_date, p2.Name from process p1, pet p2 where p1.pet_id = p2.id and substr(process_date,7)||substr(process_date,4,2)||substr(process_date,1,2) between substr('${first_time}',7)||substr('${first_time}',4,2)||substr('${first_time}',1,2) and substr('${second_time}',7)||substr('${second_time}',4,2)||substr('${second_time}',1,2)`);
                    
                } else {
                    const queryBuilder = new db.exec(tableName)
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