const { Branch: Model, Image } = require('../models');
const BaseService = require('./BaseService');

class BranchService extends BaseService {
	Model;
	static className = 'BranchService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.include = [];

		this.has_images = false;
	}
}

module.exports = BranchService;
