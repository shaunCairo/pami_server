const filterObject = (obj, ...allowedFields) => {
	const newObj = {};
	Object.keys(obj).forEach((el) => {
		if (allowedFields.includes(el)) newObj[el] = obj[el];
	});
	return newObj;
};

// return ids in array of objects
const filterIds = (arrayObj) => {
	const ids = arrayObj.map((item) => {
		if (typeof item === 'object') {
			return item.id;
		}
		return item;
	});
	return ids;
};

module.exports = {
	filterObject,
	filterIds,
};
