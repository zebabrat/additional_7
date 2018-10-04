function getNumberInsteadZero(matrix, row, col, numberForMatrix) {
  let startRowBlock = Math.floor(row / 3) * 3;
  let startColBlock = Math.floor(col / 3) * 3;
  for (let i = 0; i <= 8; i++) {
    numberForMatrix = numberForMatrix.filter(numbers =>
      numbers !== matrix[i][col] && numbers !== matrix[row][i] && numbers !== matrix[startRowBlock + i % 3][startColBlock + Math.floor(i / 3)]);
  }
  return numberForMatrix;
}

module.exports = function solveSudoku(matrix) {
  const numberForMatrix = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let possibleNumbers = 0;
  for (let row = 0; row <= 8; row++) {
    for (let col = 0; col <= 8; col++) {
      if (matrix[row][col] === 0) {
        possibleNumbers = getNumberInsteadZero(matrix, row, col, numberForMatrix);
      } else {
        continue;
      }
      for (var i = 0; i < possibleNumbers.length; i++) {
        matrix[row][col] = possibleNumbers[i];
        if (solveSudoku(matrix)) {
          return matrix;
        }
      }
      matrix[row][col] = 0;
      return false;
    }
  }
  return matrix;
}
