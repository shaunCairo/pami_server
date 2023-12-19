const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const upload = require('../middlewares/multer.js');
const catchUnknownError = require('../utils/catchUnknownError.js');

const _MainController = require('../controllers/DashboardController');

const MainController = new _MainController();

const prefix = '/dashboard';

router.get(
	`${prefix}/get-head-count`,
	auth.protect,
	catchUnknownError(MainController.getHeadCount.bind(MainController)),
);

module.exports = router;
