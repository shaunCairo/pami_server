'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class CiPpai extends Model {
		static associate(models) {}
	}

	CiPpai.init(
		{
			ref_num: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'ref_num',
				comment: 'Claim No.',
			},
			cl_loss: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				field: 'cl_loss',
				comment: 'Accident Date',
			},
			cl_date: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				field: 'cl_date',
				comment: 'Report Date',
			},
			coc_date: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				field: 'coc_date',
				comment: 'Issue Date',
			},
			coc_ctrc: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'coc_ctrc',
				comment: 'PPAI Policy No.',
			},
			veh_plno: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'veh_plno',
				comment: 'Plate No.',
			},
			ltf_oper: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'ltf_oper',
				comment: 'Operator',
			},
			claimant: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'claimant',
				comment: 'Claimant',
			},
			CovDesc: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'CovDesc',
				comment: 'Claim Type',
			},
			res_amt: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				field: 'res_amt',
				comment: 'Amount Reserve',
			},
			pay_amt: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				field: 'pay_amt',
				comment: 'Amount Paid',
			},
			cv_dt: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				field: 'cv_dt',
				comment: 'CV Date',
			},
			cv_no: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'cv_no',
				comment: 'CV No.',
			},
			chk_no: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'chk_no',
				comment: 'Check No.',
			},
			cl_stat: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'cl_stat',
				comment: `Claim Status, - PD - Settled
                - OU - Outstanding
                - DC - Decline
                - NP - Not Pursued`,
			},
		},
		{
			sequelize: sequelize,
			modelName: 'CiPpai',
			tableName: 'ci_ppai',
			timestamps: false,
			freezeTableName: true,
		},
	);
	return CiPpai;
};
