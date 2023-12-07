'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ClaimImage extends Model {
		static associate(models) {
			this.belongsTo(models.Claim, {
				constraints: false,
				foreignKey: 'claim_id',
			});
		}
	}
	ClaimImage.init(
		{
			public_id: { type: DataTypes.STRING, allowNull: false },
			secure_url: { type: DataTypes.STRING, allowNull: false },
			width: {
				type: DataTypes.INTEGER,
			},
			height: {
				type: DataTypes.INTEGER,
			},
		},
		{
			underscored: true,
			sequelize,
			modelName: 'ClaimImage',
		},
	);
	return ClaimImage;
};
