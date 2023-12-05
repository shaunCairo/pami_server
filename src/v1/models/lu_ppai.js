'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class LuPpai extends Model {
		static associate(models) {}
	}

	LuPpai.init(
		{
			COC_DATE: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				field: 'COC_DATE',
				comment: 'Issue date',
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
			LTF_ORIG: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'LTF_ORIG',
				comment: 'Origin',
			},
			LTF_DEST: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'LTF_DEST',
				comment: 'Destination',
			},
			LTF_VIA: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'LTF_VIA',
				comment: 'Via',
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
			MVFILE_NO: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'MVFILE_NO',
				comment: 'MV File No.',
			},
			AUTH_NO: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'AUTH_NO',
				comment: 'Authentication No.',
			},
			AGN_CODE: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'AGN_CODE',
				comment: 'Agent Code',
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
			modelName: 'LuPpai',
			tableName: 'lu_ppai',
			freezeTableName: true,
			timestamps: false,
		},
	);
	return LuPpai;
};
