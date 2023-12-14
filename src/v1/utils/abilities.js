const abilities = [
	'hero_images:read',
	'news_updates:read',
	'galleries:read',
	'media:read',
	'branches:read',
	'users:read',
	'claim_reports:read',
	'claim_inquiries:read',
	'vehicle_lookup:read',
];

const super_admin = [
	'hero_images:read',
	'news_updates:read',
	'galleries:read',
	'media:read',
	'branches:read',
	'users:read',
	'claim_reports:read',
	'claim_inquiries:read',
	'vehicle_lookup:read',
];

const admin = [
	'hero_images:read',
	'news_updates:read',
	'galleries:read',
	'media:read',
	'users:read',
];

const user = [
	'claim_reports:read',
	'claim_inquiries:read',
	'vehicle_lookup:read',
];

module.exports = {
	user,
	admin,
	super_admin,
};
