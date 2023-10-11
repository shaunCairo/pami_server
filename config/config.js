const development = {
	username: process.env.DEV_DATABASE_USER,
	password: process.env.DEV_DATABASE_PASS,
	database: process.env.DEV_DATABASE_NAME,
	host: process.env.DEV_DATABASE_HOST,
	dialect: process.env.DEV_DATABASE_DIALECT,
};

const production = {
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASS,
	database: process.env.DATABASE_NAME_TEST,
	host: process.env.DATABASE_HOST,
	dialect: process.env.DATABASE_DIALECT,
};

module.exports = {
	development,
	production,
};
