const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const viewpath = path.join(__dirname, '../views/');
const multer = require('multer');
const AppError = require('../utils/appError.js');
const fs = require('fs');

class ImageHelper {
	static className = 'ImageHelper';
	constructor() {}

	delete(file_path) {
		if (fs.existsSync(file_path)) {
			// Delete the file
			fs.unlink(file_path, (err) => {
				if (err) {
					console.error(`Error deleting file: ${err}`);
					return false;
				}
			});
		} else {
			console.log('File does not exist.');
		}
	}

	moveFile(source_file, destination) {
		const destinationFolder = 'public/img';

		if (!fs.existsSync(destinationFolder)) {
			fs.mkdirSync(destinationFolder, { recursive: true });
		}

		fs.rename(source_file, destination, (err) => {
			if (err) {
				console.error(`Error moving file: ${err}`);
				return false;
			}
		});
	}
}

module.exports = ImageHelper;
