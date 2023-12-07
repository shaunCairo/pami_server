const { Claim: Model, ClaimImage } = require('../models');
const BaseService = require('./BaseService');

class ClaimService extends BaseService {
	Model;
	static className = 'ClaimService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.includeTo = {
			readOne: true,
			readAll: false,
		};
		this.include = [
			{
				model: ClaimImage,
				as: 'claim_images',
				attributes: [
					'id',
					'public_id',
					'secure_url',
					'width',
					'height',
				],
			},
		];

		this.has_images = true;
	}
}

module.exports = ClaimService;
