const BaseController = require('./BaseController');
const { jsonResponse } = require('../utils/responseBuilder');
const { LuCtpl, LuPpai, CiCtpl, CiPpai } = require('../models');

class DashboardController {
	constructor() {
		this.LuCtpl = LuCtpl;
		this.LuPpai = LuPpai;
		this.CiCtpl = CiCtpl;
		this.CiPpai = CiPpai;
	}

	async getHeadCount(req, res, next) {
		const lu_ctpl = await this.LuCtpl.count();
		const lu_ppai = await this.LuPpai.count();
		const ci_ctpl = await this.CiCtpl.count();
		const ci_ppai = await this.CiPpai.count();

		const data = {
			lu_ctpl: lu_ctpl,
			lu_ppai: lu_ppai,
			ci_ctpl: ci_ctpl,
			ci_ppai: ci_ppai,
		};

		const statusCode = 200;
		res.status(statusCode).json(
			jsonResponse(statusCode, 'Data retrieved successfully.', data),
		);
		return;
	}
}

module.exports = DashboardController;
