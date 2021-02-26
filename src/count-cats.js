const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let cat = 0;

  if (matrix === undefined || matrix.length == 0) {
    return 0;
  }

  let newMatrix = matrix.reduce(function (resultArr, currentArr) {
    return resultArr.concat(currentArr);
  })

  newMatrix.forEach(function (currentElement) {
    if (currentElement == "^^") {
      cat++;
    }
  });

  return cat;
}



