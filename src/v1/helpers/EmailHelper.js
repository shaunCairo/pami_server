const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const viewpath = path.join(__dirname, '../views/');

class Email {
	constructor(to) {
		this.to = to;
		this.from = process.env.EMAIL_FROM_NAME;
	}

	newTransport() {
		let transporter;
		if (process.env.NODE_ENV === 'development') {
			// Sendgrid
			transporter = nodemailer.createTransport({
				host: process.env.MAILTRAP_HOST,
				port: process.env.MAILTRAP_PORT,
				auth: {
					user: process.env.MAILTRAP_USERNAME,
					pass: process.env.MAILTRAP_PASSWORD,
				},
			});
		} else {
			transporter = nodemailer.createTransport({
				host: process.env.EMAIL_HOST,
				auth: {
					user: process.env.EMAIL_USERNAME,
					pass: process.env.EMAIL_PASSWORD,
				},
			});
		}

		const handlebarOptions = {
			viewEngine: {
				extName: '.handlebars',
				partialsDir: viewpath,
				defaultLayout: false,
			},
			viewPath: viewpath,
			extName: '.handlebars',
		};

		transporter.use('compile', hbs(handlebarOptions));

		return transporter;
	}

	// Send the actual email
	async execute(template, subject, context = {}) {
		// 2) Define email options
		const mailOptions = {
			from: this.from,
			to: this.to,
			subject,
			template,
			context,
		};
		// 3) Create a transport and send email
		await this.newTransport().sendMail(mailOptions);
	}

	async sendPlainEmail(content) {
		const subject = 'Email from website (pami.ph)';
		const template = 'plain';
		await this.execute(template, subject, content);
	}
}

module.exports = Email;
