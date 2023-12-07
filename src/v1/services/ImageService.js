const { Image: Model } = require('../models');
const BaseService = require('./BaseService');

class ImageService extends BaseService {
	Model;
	static className = 'ImageService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.include = [];
	}
}

module.exports = ImageService;
