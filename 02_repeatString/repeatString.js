const repeatString = function(str, numRepeats) {

	var returnStr = "";
	if (str) {
		for (let i = 0; i < numRepeats; i++) {
			returnStr = returnStr + str;
		}
	}

	if (numRepeats < 0) {
		returnStr = "ERROR";
	}
	return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
