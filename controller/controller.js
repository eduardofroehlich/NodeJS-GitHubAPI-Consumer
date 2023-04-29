const axios = require('axios');
const baseUrl = 'https://api.github.com';
module.exports = {
    async searchProfileByName(req, res) {
        const { name } = req.query;

        await axios.get(`${baseUrl}/users/${name}`).then(function(response) {
            res.send(response.data);
        }).catch((error) => {
            res.status(error.response.status).json({
                message: error.response.data.message
            });
        })
    },

    async listAllUserWithPagination(req, res) {
        const { pagination } = req.query;

        await axios.get(`${baseUrl}/users`, {
            params: {
                per_page: pagination
            }
        }).then(function(response) {
            res.send(response.data);
        }).catch((error) => {
            res.json({ msg: "An error happened" + error});
        })
    },
}