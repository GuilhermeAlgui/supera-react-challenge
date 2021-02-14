function sortByProperty(property) {
	return function (a, b) {
		if (a[property] > b[property]) return 1;
		else if (a[property] < b[property]) return -1;

		return 0;
	};
}

function sortJsonArray(JSONARRAY, property, order) {
	JSONARRAY.sort(sortByProperty(property));

	if (order) return JSONARRAY;
	else return JSONARRAY.reverse();
}

export default sortJsonArray;
