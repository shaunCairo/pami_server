const { Leadership: Model, Image } = require('../models');
const BaseService = require('./BaseService');

class LeadershipService extends BaseService {
	Model;
	static className = 'LeadershipService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.include = [
			{
				model: Image,
				as: 'images',
				attributes: [
					'id',
					'public_id',
					'secure_url',
					'width',
					'height',
				],
				through: { attributes: [] },
			},
		];

		this.has_images = true;
	}
}

module.exports = LeadershipService;
