const multer = require('multer');
const path = require('path');
const AppError = require('../utils/appError.js');
const { v4: uuidv4 } = require('uuid');

// Multer config
// module.exports = multer({
// 	storage: multer.diskStorage({
// 		destination: (req, file, cb) => {
// 			cb(null, 'public/img/tmp');
// 		},
// 		filename: (req, file, cb) => {
// 			const ext = file.mimetype.split('/')[1];
// 			cb(null, `${Date.now()}.${ext}`);
// 		},
// 	}),
// 	fileFilter: (req, file, cb) => {
// 		let ext = path.extname(file.originalname);
// 		if (
// 			ext !== '.jpg' &&
// 			ext !== '.jpeg' &&
// 			ext !== '.png' &&
// 			ext !== '.webp'
// 		) {
// 			cb(new AppError('File type is not supported', 400), false);
// 			return;
// 		}
// 		cb(null, true);
// 	},
// });

let storage = {};
if (process.env.UPLOAD_TYPE === 'server') {
	storage = {
		destination: (req, file, cb) => {
			cb(null, 'public/tmp/img/');
		},
		filename: (req, file, cb) => {
			const public_id = uuidv4();
			const ext = file.mimetype.split('/')[1];
			cb(null, `${file.originalname}-${public_id}-${Date.now()}.${ext}`);

			req.body.public_id = public_id;
		},
	};
}

module.exports = multer({
	storage: multer.diskStorage(storage),
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname);
		if (
			ext !== '.jpg' &&
			ext !== '.jpeg' &&
			ext !== '.png' &&
			ext !== '.webp'
		) {
			cb(new AppError('File type is not supported', 400), false);
			return;
		}
		cb(null, true);
	},
});
