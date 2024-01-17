const jwt = require('jsonwebtoken');
const { User } = require('../models');

const AppError = require('../utils/appError.js');
const catchUnknownError = require('../utils/catchUnknownError.js');

exports.protect = catchUnknownError(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		// Get token from header
		token = req.headers.authorization.split(' ')[1];
	}
	// console.log(req.headers);
	if (!token) {
		return next(new AppError('Forbidden: No provided token', 403));
	}

	// Verify token
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	console.log('ID:', decoded.id);
	// Get user from the token
	const authenticatedUser = await User.findOne({
		where: {
			id: decoded.id,
		},
		attributes: {
			exclude: [
				'password_confirm',
				'password_changed_at',
				'password_reset_expires',
			],
		},
	});

	if (!authenticatedUser) {
		return next(
			new AppError(
				'The user belonging to this token does no longer exist.',
				403,
			),
		);
	}

	if (authenticatedUser.changedPasswordAfter(decoded.iat)) {
		return next(
			new AppError(
				'User recently changed password! Please log in again.',
				403,
			),
		);
	}

	req.user = authenticatedUser;
	next();
});

exports.restrictedTo = (roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new AppError(
					'You do not have permission to perform this action',
					401,
				),
			);
		}
		next();
	};
};

// module.exports {
// 	protect,
// 	restrictedTo,
// };
