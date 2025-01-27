const sumAll = function(a, b) {
	if (!Number.isFinite(a) || !Number.isFinite(b) || a < 0 || b < 0) {
		return "ERROR";
	} else {
		if (a > b) {
			let temp = a;
			a = b;
			b = temp;
		}
		let sum = 0;
		for (let i = a; i <= b; i++) {
			sum += i;
		}
		return sum;
	}
};

// Do not edit below this line
module.exports = sumAll;
