'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Leadership extends Model {
		static associate(models) {
			this.belongsToMany(models.Image, {
				through: {
					model: models.ImageAssociation,
					unique: false,
					scope: {
						owner_type: 'Leadership',
					},
				},
				foreignKey: 'owner_id',
				constraints: false,
				as: 'images',
			});
		}
	}
	Leadership.init(
		{
			name: { type: DataTypes.STRING, allowNull: false },
			position: { type: DataTypes.STRING, allowNull: true },
			link: { type: DataTypes.STRING, allowNull: true },
			hierarchy: { type: DataTypes.STRING, allowNull: true },
		},
		{
			underscored: true,
			sequelize,
			modelName: 'Leadership',
		},
	);
	return Leadership;
};
