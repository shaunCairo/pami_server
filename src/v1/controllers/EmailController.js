const BaseController = require('./BaseController');
const AppError = require('../utils/appError.js');
const { jsonResponse } = require('../utils/responseBuilder');
const Email = require('../helpers/EmailHelper.js');

class EmailController extends BaseController {
	async sendEmail(req, res, next) {
		const { full_name, email, number, subject, message } = req.body;

		if (!full_name || !email || !number || !subject || !message) {
			return next(
				new AppError(
					'Your request seems to be incorrect or missing.',
					400,
				),
			);
		}

		await new Email(email).sendPlainEmail(req.body);

		const statusCode = 200;
		res.status(statusCode).json(
			jsonResponse(statusCode, 'Email sent successfully.', undefined),
		);
		return;
	}
}

module.exports = EmailController;
