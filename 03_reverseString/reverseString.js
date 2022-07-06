const reverseString = function(str) {
	var temp = "";
	var strLen = str.length;

	for (let i = strLen - 1; i >= 0; i--) {
		temp = temp + str[i];
	}
	return temp;
};

// Do not edit below this line
module.exports = reverseString;
