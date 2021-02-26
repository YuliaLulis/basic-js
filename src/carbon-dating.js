const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(carbon) {
  if ((typeof carbon == "string") || (carbon > 15) || (carbon < 1) || (carbon != '')) {
    return false;
  }

  return Math.ceil((Math.log(MODERN_ACTIVITY / carbon)) / (0.693 / HALF_LIFE_PERIOD));
};
