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

	/**
	 * Delete multiple row by given image_id
	 * @param {*} id
	 * @returns boolean
	 */
	async deleteImageAssoc(id) {
		const _data = this.Model.destroy({
			where: {
				claim_id: id, // specify the ID or conditions for the record you want to delete permanently
			},
		});

		if (!_data) {
			return false;
		}

		return _data;
	}
}

module.exports = ClaimImageService;
