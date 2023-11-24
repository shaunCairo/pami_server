const { CiCtpl: Model } = require('../models');
const BaseService = require('./BaseService');

class CiCtplService extends BaseService {
	Model;
	static className = 'CiCtplService';
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

module.exports = CiCtplService;
