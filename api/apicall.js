const db = require('../api/queryBuild')

module.exports = {
    get: async function (req) {
        const queryBuilder = new db.exec('Human')
        return await queryBuilder.select('*').where('Mail', req.Mail).where('Password', req.Password);
    },
    post: function (uri, data, auth) {
        return axios.post(uri, data, auth)
            .then(res => {
                return res
            })
    },
    put: function (uri, data, auth) {
        return axios.put(uri, data, auth)
            .then(res => {
                return res
            })
    },
    delete: function (uri, auth) {
        return axios.delete(uri, auth)
            .then(res => {
                return res
            })
    }
}