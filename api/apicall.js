const db = require('../api/queryBuild')

module.exports = {
    get: async function (tableName, data) {
        const queryBuilder = new db.exec(tableName)
        return await queryBuilder.select('*').where(data);
    },
    post: async function (uri, data) {

        return axios.post(uri, data)
            .then(res => {
                return res
            })
    },
    put: async function (uri, data) {
        return axios.put(uri, data, auth)
            .then(res => {
                return res
            })
    },
    delete: async function (uri) {
        return axios.delete(uri)
            .then(res => {
                return res
            })
    }
}