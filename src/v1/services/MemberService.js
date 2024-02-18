const { Member: Model, Image } = require('../models');
const BaseService = require('./BaseService');

class MemberService extends BaseService {
	Model;
	static className = 'MemberService';
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

module.exports = MemberService;
