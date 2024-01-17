const BaseController = require('./BaseController');
const AppError = require('../utils/appError.js');
const { jsonResponse } = require('../utils/responseBuilder');
const filterObject = require('./../utils/filterObject');

class WebAppController extends BaseController {
	constructor(services, helpers) {
		super(services, helpers);
	}

	async getSettings(req, res, next) {
		const BaseService = new this.BaseService();
		const data = await BaseService.getSettings();

		const statusCode = 200;
		res.status(statusCode).json(
			jsonResponse(statusCode, 'Data retrieved successfully.', data),
		);
	}

	async updateSettings(req, res, next) {
		const BaseService = new this.BaseService();
		const data = await BaseService.updateSettings(req.body);

		const statusCode = 200;
		res.status(statusCode).json(
			jsonResponse(statusCode, 'Resource updated successfully.', data),
		);
		return;
	}
}

module.exports = WebAppController;
