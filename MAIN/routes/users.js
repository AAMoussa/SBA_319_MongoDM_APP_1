//Create routes using Express to handle CRUD operations

const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

router.get('/', getUsers);

module.exports = router;