'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Member extends Model {
		static associate(models) {
			this.belongsToMany(models.Image, {
				through: {
					model: models.ImageAssociation,
					unique: false,
					scope: {
						owner_type: 'Member',
					},
				},
				foreignKey: 'owner_id',
				constraints: false,
				as: 'images',
			});
		}
	}
	Member.init(
		{
			title: { type: DataTypes.STRING, allowNull: false },
			subtitle: { type: DataTypes.STRING, allowNull: true },
			link: { type: DataTypes.STRING, allowNull: true },
			is_published: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			underscored: true,
			sequelize,
			modelName: 'Member',
		},
	);
	return Member;
};
