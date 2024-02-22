const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const upload = require('../middlewares/multer.js');
const catchUnknownError = require('../utils/catchUnknownError.js');

const MainService = require('../services/CiCtplService');
const _MainController = require('../controllers/CiCtplController');

const MainController = new _MainController([MainService]);

const prefix = '/ci_ctpl';

router.get(
	`${prefix}`,
	catchUnknownError(MainController.readAll.bind(MainController)),
);

router.get(
	`${prefix}/:id`,
	catchUnknownError(MainController.readOne.bind(MainController)),
);

router.patch(
	`${prefix}/:id`,
	express.json(),
	auth.protect,
	catchUnknownError(MainController.update.bind(MainController)),
);

router.post(
	`${prefix}`,
	express.json(),
	auth.protect,
	catchUnknownError(MainController.create.bind(MainController)),
);

router.delete(
	`${prefix}/:id`,
	auth.protect,
	auth.restrictedTo(['super_admin', 'admin']),
	catchUnknownError(MainController.delete.bind(MainController)),
);

module.exports = router;
