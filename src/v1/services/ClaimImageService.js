const { ClaimImage: Model } = require('../models');
const BaseService = require('./BaseService');
const ImageHelper = require('../helpers/ImageHelper');
const cloudinary = require('../../../config/cloudinary');

class ClaimImageService extends BaseService {
	Model;
	static className = 'ClaimImageService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.include = [];
		this.ImageHelper = ImageHelper;
	}

	/**
	 * Delete multiple row by given image_id
	 * @param {*} id
	 * @returns boolean
	 */
	async deleteImageAssoc(id) {
		const to_be_deleted_images = await this.Model.findAll({
			where: {
				claim_id: id, // specify the ID or conditions for the record you want to delete permanently
			},
		});

		const _data = await this.Model.destroy({
			where: {
				claim_id: id, // specify the ID or conditions for the record you want to delete permanently
			},
		});

		if (!_data) {
			return false;
		}

		for (let img of to_be_deleted_images) {
			if (process.env.UPLOAD_TYPE === 'server') {
				const ImageHelper = new this.ImageHelper();
				const path = new URL(img.secure_url).pathname;
				ImageHelper.delete('public' + path);
			} else {
				await cloudinary.uploader.destroy(img.public_id);
			}
		}

		return _data;
	}
}

module.exports = ClaimImageService;
