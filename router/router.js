const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const cors = require('cors')

router.use(cors())
router.get('/searchProfileByName', controller.searchProfileByName);
router.get('/searchAllUsers', controller.listAllUserWithPagination);
router.get('/getRepositories', controller.getRepositories);

module.exports = router;