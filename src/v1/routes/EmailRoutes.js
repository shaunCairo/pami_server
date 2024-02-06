const express = require('express');
const router = express.Router();
const catchUnknownError = require('../utils/catchUnknownError.js');
const _MainController = require('../controllers/EmailController');

const MainController = new _MainController([]);

const prefix = '/email';

router.post(
	`${prefix}/send_email`,
	express.json(),
	catchUnknownError(MainController.sendEmail.bind(MainController)),
);

module.exports = router;
