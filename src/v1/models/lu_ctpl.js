'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class LuCtpl extends Model {
		static associate(models) {}
	}

	LuCtpl.init(
		{
			COC_DATE: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				field: 'COC_DATE',
				comment: 'Issue Date',
			},
			TPLNUM: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'TPLNUM',
				comment: 'CTPL Policy No.',
			},
			COC_CTRC: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'COC_CTRC',
				comment: 'PPAI Policy No.',
			},
			LTF_CASE: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'LTF_CASE',
				comment: 'Case No.',
			},
			LTF_OPER: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'LTF_OPER',
				comment: 'Operator',
			},
			LTF_ADDR: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'LTF_ADDR',
				comment: 'Address',
			},
			COC_PEFR: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				field: 'COC_PEFR',
				comment: 'Inception',
			},
			COC_PETO: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				field: 'COC_PETO',
				comment: 'Expiry',
			},
			VEH_MOYR: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'VEH_MOYR',
				comment: 'Year Model',
			},
			VEH_MAKE: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'VEH_MAKE',
				comment: 'Make',
			},
			VEH_PLNO: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'VEH_PLNO',
				comment: 'Plate No.',
			},
			VEH_SENO: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'VEH_SENO',
				comment: 'Chassis No.',
			},
			VEH_MONO: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'VEH_MONO',
				comment: 'Engine No.',
			},
			AGN_CODE: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'AGN_CODE',
				comment: 'Agent Code',
			},
			AUTH_NO: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'AUTH_NO',
				comment: 'Authentication No.',
			},
			MVFILE_NO: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'MVFILE_NO',
				comment: 'MV File No.',
			},
			COC_AMT: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				field: 'COC_AMT',
				comment: 'Amount',
			},
			VEH_TYPE: {
				type: DataTypes.STRING,
				allowNull: true,
				field: 'VEH_TYPE',
				comment: 'Vehicle Type',
			},
		},
		{
			sequelize: sequelize,
			underscored: true,
			modelName: 'LuCtpl',
			tableName: 'lu_ctpl',
			freezeTableName: true,
			timestamps: false,
		},
	);
	return LuCtpl;
};
