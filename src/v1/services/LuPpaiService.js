const { LuPpai: Model } = require('../models');
const BaseService = require('./BaseService');

class LuPpaiService extends BaseService {
	Model;
	static className = 'LuPpaiService';
	constructor() {
		super(Model);

		this.Model = Model;
		// this.include = [
		// 	{
		// 		model: Image,
		// 		as: 'images',
		// 		attributes: [
		// 			'id',
		// 			'public_id',
		// 			'secure_url',
		// 			'width',
		// 			'height',
		// 		],
		// 		through: { attributes: [] },
		// 	},
		// ];

		// this.has_images = true;
	}
}

module.exports = LuPpaiService;
