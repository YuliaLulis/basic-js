const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsCount;
  let secondsCount;

  turnsCount = 2 ** [disksNumber] - 1;
  secondsCount = turnsCount / turnsSpeed * 3600;


  turnsCount = Math.floor(2 ** [disksNumber] - 1);
  secondsCount = Math.floor(turnsCount / turnsSpeed * 3600);

  return {
    turns: Math.floor(turnsCount),
    seconds: Math.floor(secondsCount)
      }

};
