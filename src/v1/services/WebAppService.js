const { WebApp: Model, Image } = require('../models');
const BaseService = require('./BaseService');
const jwt = require('jsonwebtoken');
const Email = require('../helpers/EmailHelper.js');
const crypto = require('crypto');
const { Op } = require('sequelize');
const { filterIds } = require('../utils/useUtils.js');

class WebAppService extends BaseService {
	Model;
	static className = 'WebAppService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.include = [
			{
				model: Image,
				as: 'logos',
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

	async getSettings() {
		let data;
		data = await this.Model.findOne({
			where: {
				id: 1,
			},
			include: this.include,
		});

		// if no data found just create dummy
		if (!data) {
			data = await this.Model.create({
				mission_vision_json: 'MISSION_VISON',
			});
		}

		return data;
	}

	/**
	 * Update the given row with the given id
	 */
	async updateSettings(payload) {
		const _data = await this.Model.findOne({
			where: {
				id: 1,
			},
		});

		const data = await _data.update(payload);

		if (!data) {
			return false;
		}

		if (this.has_images && payload.logos) {
			// filter id before adding images
			await data.setLogos(filterIds(payload.logos));
		}

		const updatedData = await this.getSettings();

		return updatedData;
	}
}

module.exports = WebAppService;
