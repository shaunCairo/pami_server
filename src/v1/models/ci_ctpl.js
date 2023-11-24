'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class CiCtpl extends Model {
		static associate(models) {}
	}

	CiCtpl.init(
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
			tplnum: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'tplnum',
				comment: 'CTPL Policy No.',
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
			cov_desc: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'cov_desc',
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
			underscored: true,
			modelName: 'CiCtpl',
			tableName: 'ci_ctpl',
		},
	);
	return CiCtpl;
};
