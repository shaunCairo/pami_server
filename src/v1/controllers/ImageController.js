const BaseController = require('./BaseController');
const AppError = require('../utils/appError.js');
const { jsonResponse } = require('../utils/responseBuilder');
const cloudinary = require('../../../config/cloudinary.js');

class ImageController extends BaseController {
	async create(req, res, next) {
		if (!req.file) {
			return next(new AppError('File is required', 404));
		}

		const BaseService = new this.BaseService();

		let img_prop;

		if (process.env.UPLOAD_TYPE === 'server') {
			img_prop = {
				public_id: req.body.public_id,
				secure_url: req.file.path,
			};
		} else {
			img_prop = await cloudinary.uploader.upload(req.file.path, {
				upload_preset:
					process.env.CLOUDINARY_IMAGE_PRESET || 'development_preset',
			});
		}

		let data = await BaseService.create(img_prop);

		if (process.env.UPLOAD_TYPE === 'server') {
			const ImageHelper = new this.ImageHelper();

			if (!data) {
				ImageHelper.delete(req.file.path);
				return next(new AppError('Error uploading image', 401));
			}

			const destination = `public/img/${req.file.filename}`;
			const secure_url = `${process.env.WEB_ORIGIN}/img/${req.file.filename}`;

			ImageHelper.moveFile(req.file.path, destination);

			data = await BaseService.update(data.id, {
				secure_url,
			});
		}

		const statusCode = 200;
		res.status(statusCode).json(
			jsonResponse(statusCode, 'Resource created successfully.', data),
		);
		return;
	}

	async delete(req, res, next) {
		const id = req.params.id;
		const BaseService = new this.BaseService();

		const data = await BaseService.delete(id);

		if (!data) {
			return next(
				new AppError('The requested resource was not found', 404),
			);
		}

		// delete the association of the image_id given to any models
		const ImageAssociationService = new this.ImageAssociationService();
		await ImageAssociationService.deleteImageAssoc(id);

		if (process.env.UPLOAD_TYPE === 'server') {
			const ImageHelper = new this.ImageHelper();
			const path = new URL(data.secure_url).pathname;
			ImageHelper.delete('public' + path);
		} else {
			await cloudinary.uploader.destroy(data.public_id);
		}

		const statusCode = 200;

		res.status(statusCode).json(
			jsonResponse(
				statusCode,
				'Resource deleted successfully.',
				undefined,
			),
		);
		return;
	}
}

module.exports = ImageController;
