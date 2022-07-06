const ftoc = function(fTemp) {
  if (fTemp == 32) {
    return 0;
  }

  var cTemp = ((fTemp - 32) * (5/9)).toFixed(1);
  return parseFloat(cTemp);
};

const ctof = function(cTemp) {
  if (cTemp == 0) {
    return 32;
  }
  var fTemp = (cTemp * (9/5) + 32).toFixed(1);
  return parseFloat(fTemp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
