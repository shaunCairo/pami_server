require('dotenv').config();
// import app from './app.js';

const app = require('./src/app.js');
const db = require('./src/v1/models');

process.on('uncaughtException', (err) => {
	console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
	console.log(err, err.message);
	process.exit(1);
});

(async () => {
	if (true) {
		await db.User.sync({ alter: true });
		await db.Image.sync({ alter: true });
		await db.ImageAssociation.sync({ alter: true });
		await db.GovPartner.sync({ alter: true });
		await db.Hero.sync({ alter: true });
		await db.Blog.sync({ alter: true });
		await db.Branch.sync({ alter: true });
		await db.Gallery.sync({ alter: true });
		await db.Claim.sync({ alter: true });
	}

	const port = process.env.PORT || 5000;
	const server = app.listen(port, () => {
		console.log(`App running on port ${port}...`);
	});

	process.on('unhandledRejection', (err) => {
		console.log('UNHANDLED REJECTION! 💥 Shutting down...');
		console.log(err, err.message);
		server.close(() => {
			process.exit(1);
		});
	});

	process.on('SIGTERM', () => {
		console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
		server.close(() => {
			console.log('💥 Process terminated!');
		});
	});

	// Code here
})();
