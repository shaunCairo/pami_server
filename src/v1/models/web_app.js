'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class WebApp extends Model {
		static associate(models) {
			this.belongsToMany(models.Image, {
				through: {
					model: models.ImageAssociation,
					unique: false,
					scope: {
						owner_type: 'WebApp',
					},
				},
				foreignKey: 'owner_id',
				constraints: false,
				as: 'logos',
			});
		}
	}

	WebApp.init(
		{
			mission_vision_json: { type: DataTypes.TEXT, allowNull: true },
		},
		{
			sequelize: sequelize,
			underscored: true,
			modelName: 'WebApp',
			tableName: 'web_app',
			freezeTableName: true,
			timestamps: false,
		},
	);
	return WebApp;
};
