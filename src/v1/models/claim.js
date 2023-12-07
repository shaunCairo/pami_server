'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Claim extends Model {
		static associate(models) {
			this.hasMany(models.ClaimImage, {
				constraints: false,
				as: 'claim_images',
			});
		}
	}

	Claim.init(
		{
			plate_coc: { type: DataTypes.STRING, allowNull: false },
			full_name: { type: DataTypes.STRING, allowNull: false },
			email: { type: DataTypes.STRING, allowNull: false },
			contact: { type: DataTypes.STRING, allowNull: false },
			doi: { type: DataTypes.DATEONLY, allowNull: false },
			poi: { type: DataTypes.STRING, allowNull: false },
			summary: { type: DataTypes.STRING, allowNull: false },
			claim_type: { type: DataTypes.STRING, allowNull: false },
			is_published: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			sequelize: sequelize,
			underscored: true,
			modelName: 'Claim',
		},
	);
	return Claim;
};
