const removeFromArray = function(...arr) {
	var inputArr = arr[0];
	var removeArr = arr.slice(1);
	var filtered = [];

	for (let i = 0; i < inputArr.length; i++) {
		if (!removeArr.includes(inputArr[i])) {
			filtered.push(inputArr[i])
		}
	}
	return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
