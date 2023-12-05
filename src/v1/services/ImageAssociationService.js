const { ImageAssociation: Model } = require('../models');
const BaseService = require('./BaseService');

class ImageAssociationService extends BaseService {
	Model;
	static className = 'ImageAssociationService';
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
				image_id: id, // specify the ID or conditions for the record you want to delete permanently
			},
		});

		if (!_data) {
			return false;
		}

		return _data;
	}
}

module.exports = ImageAssociationService;
