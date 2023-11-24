'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class LuPpai extends Model {
		static associate(models) {}
	}

	LuPpai.init(
		{
			coc_date: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'coc_date',
				comment: 'Issue date',
			},
			coc_ctrc: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'coc_ctrc',
				comment: 'PPAI Policy No.',
			},
			ltf_case: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'ltf_case',
				comment: 'Case No.',
			},
			ltf_oper: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'ltf_oper',
				comment: 'Operator',
			},
			ltf_addr: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'ltf_addr',
				comment: 'Address',
			},
			ltf_orig: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'ltf_orig',
				comment: 'Origin',
			},
			ltf_dest: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'ltf_dest',
				comment: 'Destination',
			},
			ltf_via: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'ltf_via',
				comment: 'Via',
			},
			coc_pefr: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'coc_pefr',
				comment: 'Inception',
			},
			coc_peto: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'coc_peto',
				comment: 'Expiry',
			},
			veh_moyr: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'veh_moyr',
				comment: 'Year Model',
			},
			veh_make: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'veh_make',
				comment: 'Make',
			},
			veh_plno: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'veh_plno',
				comment: 'Plate No.',
			},
			veh_seno: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'veh_seno',
				comment: 'Chassis No.',
			},
			veh_mono: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'veh_mono',
				comment: 'Engine No.',
			},
			mvfile_no: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'mvfile_no',
				comment: 'MV File No.',
			},
			auth_no: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'auth_no',
				comment: 'Authentication No.',
			},
			agn_code: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'agn_code',
				comment: 'Agent Code',
			},
			coc_amt: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				field: 'coc_amt',
				comment: 'Amount',
			},
			veh_type: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'veh_type',
				comment: 'Vehicle Type',
			},
		},
		{
			sequelize: sequelize,
			underscored: true,
			modelName: 'LuPpai',
			tableName: 'lu_ppai',
			freezeTableName: true,
		},
	);
	return LuPpai;
};
