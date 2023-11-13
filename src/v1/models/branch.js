'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Branch extends Model {
		static associate(models) {
			this.hasMany(models.User);
		}
	}

	Branch.init(
		{
			name: { type: DataTypes.STRING, allowNull: false },
			lat: { type: DataTypes.STRING, allowNull: false },
			lng: { type: DataTypes.STRING, allowNull: false },
			contact_numbers_json: { type: DataTypes.TEXT, allowNull: true },
			contact_person_json: { type: DataTypes.TEXT, allowNull: true },
			address: { type: DataTypes.TEXT, allowNull: true },
		},
		{
			sequelize: sequelize,
			underscored: true,
			modelName: 'Branch',
		},
	);
	return Branch;
};
