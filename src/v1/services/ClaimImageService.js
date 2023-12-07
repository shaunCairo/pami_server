const { ClaimImage: Model } = require('../models');
const BaseService = require('./BaseService');

class ClaimImageService extends BaseService {
	Model;
	static className = 'ClaimImageService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.include = [];
	}
}

module.exports = ClaimImageService;
