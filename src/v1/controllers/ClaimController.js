const BaseController = require('./BaseController');
const { jsonResponse } = require('../utils/responseBuilder');
class ClaimController extends BaseController {
	async delete(req, res, next) {
		const id = req.params.id;
		const BaseService = new this.BaseService();

		const data = await BaseService.delete(id);

		if (!data) {
			return next(
				new AppError('The requested resource was not found', 404),
			);
		}

		const ClaimImageService = new this.ClaimImageService();
		await ClaimImageService.deleteImageAssoc(id);

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

module.exports = ClaimController;
