'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Gallery extends Model {
		static associate(models) {
			this.belongsToMany(models.Image, {
				through: {
					model: models.ImageAssociation,
					unique: false,
					scope: {
						owner_type: 'Gallery',
					},
				},
				foreignKey: 'owner_id',
				constraints: false,
				as: 'images',
			});
		}
	}

	Gallery.init(
		{
			title: { type: DataTypes.STRING, allowNull: false },
			subtitle: { type: DataTypes.STRING, allowNull: true },
			desc: { type: DataTypes.TEXT, allowNull: true },
			is_published: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
			date: { type: DataTypes.DATE, allowNull: true },
		},
		{
			sequelize: sequelize,
			underscored: true,
			modelName: 'Gallery',
		},
	);
	return Gallery;
};
