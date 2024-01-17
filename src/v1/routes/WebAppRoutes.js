const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const upload = require('../middlewares/multer.js');
const catchUnknownError = require('../utils/catchUnknownError.js');

const MainService = require('../services/WebAppService');
const _MainController = require('../controllers/WebAppController');

const MainController = new _MainController([MainService]);

const prefix = '/web_app';

router.get(
	`${prefix}`,
	catchUnknownError(MainController.getSettings.bind(MainController)),
);

router.post(
	`${prefix}`,
	express.json(),
	catchUnknownError(MainController.updateSettings.bind(MainController)),
);

module.exports = router;
