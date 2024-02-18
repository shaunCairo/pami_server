const BaseController = require('./BaseController.js');
const AppError = require('../utils/appError.js');
const { jsonResponse } = require('../utils/responseBuilder.js');

class LeadershipController extends BaseController {}

module.exports = LeadershipController;
