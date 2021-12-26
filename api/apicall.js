const db = require('../api/queryBuild')
const _ = require('lodash');
const { response } = require('express');
module.exports = {
    get: async function (tableName, data, joinData) {
        try {
            if (_.isUndefined(data)) {
                const queryBuilder = new db.exec(tableName)
                return await queryBuilder.select('*');
            } else {
                if (!_.isUndefined(joinData)) {
                    let {
                        table,
                        pet_id
                    } = joinData
                    const queryBuilder = new db.exec(tableName)
                    return await queryBuilder.select('*').join(`${table}`, 'pet.id', '=', `${table}.pet_id`).where(data);
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