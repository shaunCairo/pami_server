const { Op } = require('sequelize');

class SequelizeQueryBuilder {
	constructor(model, reqQuery) {
		this.model = model;
		this.reqQuery = reqQuery;
		this.filterOptions = {};
		this.orderOptions = [['createdAt', 'DESC']];
		this.attributesOptions = { exclude: [] };
		this.paginationOptions = { page: 1, limit: 20 };
	}

	filter() {
		// Create a copy of the query object to avoid modification of the original object
		const queryObj = { ...this.reqQuery };

		// Remove reserved fields to prevent conflicts during filtering
		const excludedFields = ['page', 'sort', 'limit', 'fields'];
		excludedFields.forEach((el) => delete queryObj[el]);

		// Loop through the query object to create an object of queries
		for (const key in queryObj) {
			// Check if the property 'key' is a direct property of the object itself
			if (Object.prototype.hasOwnProperty.call(queryObj, key)) {
				// Set default values for the operator and query value
				let opVal = 'eq'; // Default operator value is 'eq'
				let qryVal = queryObj[key]; // Default query value

				// Check if the value associated with the key is an object
				// For example, if the query looks like this: ?name[gte]=dev
				// The value will be an object
				if (
					typeof queryObj[key] === 'object' &&
					queryObj[key] !== null
				) {
					// Retrieve the first key in the object
					const keyName = Object.keys(queryObj[key])[0];

					// Set the operator value based on the extracted key from the object
					// For example: ?name[gte]=dev results in opVal = 'gte', 'like', 'eq', etc.
					opVal = keyName;

					// Set the query value based on the extracted key's value
					// For example: ?name[gte]=dev results in qryVal = 'dev'
					qryVal = queryObj[key][keyName];
				}

				// If the operator is 'like', add percentage signs (%) as it's required in SQL
				if (opVal === 'like') {
					qryVal = '%' + qryVal + '%';
				}

				// Build the query by constructing an object with Sequelize's Op[opVal] as the key
				queryObj[key] = { [Op[opVal]]: qryVal };
			}
		}
		this.filterOptions = queryObj;

		return this;
	}

	sort() {
		if (this.reqQuery.sort) {
			const sortBy = this.reqQuery.sort.split(',').join(' ');
			this.orderOptions = [sortBy];
		}
		return this;
	}

	limitFields() {
		if (this.reqQuery.fields) {
			const fields = this.reqQuery.fields
				.split(',')
				.map((field) => field.trim());
			this.attributesOptions = { include: fields };
		}
		return this;
	}

	paginate() {
		const page = this.reqQuery.page * 1 || 1;
		const limit = this.reqQuery.limit * 1 || 20;
		const offset = (page - 1) * limit;

		this.paginationOptions = { page, limit, offset };
		return this;
	}

	async getResults(include = []) {
		const results = await this.model.findAll({
			where: this.filterOptions,
			attributes: this.attributesOptions,
			order: this.orderOptions,
			...this.paginationOptions,
			include: include,
		});

		return results;
	}
}

module.exports = SequelizeQueryBuilder;
