const axios = require('axios');
const baseUrl = 'https://api.github.com';
const token = "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";

module.exports = {
    async searchProfileByName(req, res) {
        const { name } = req.query;

        await axios.get(`${baseUrl}/users/${name}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function(response) {
            res.send(response.data);
        }).catch((error) => {
            res.status(error.response.status).json({
                message: error.response.data.message
            });
        })
    },

    async getRepositories(req, res) {
        const { name } = req.query;
        await axios.get(`${baseUrl}/users/${name}/repos`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function(response) {
            res.send(response.data);
        }).catch((error) => {
            res.status(error.response.status).json({
                message: error.response.data.message
            });
        })
    },

    async listAllUserWithPagination(req, res) {
        const { pagination, since } = req.query;

        await axios.get(`${baseUrl}/users`, {
            params: {
                per_page: pagination,
                since: since,
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function(response) {
            res.send(response.data);
        }).catch((error) => {
            res.json({ msg: "An error happened" + error});
        })
    },
}