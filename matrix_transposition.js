/* Pseudocode
let result = [];
let nestArr = []; 
loop through rows
  loop through columns
    switch rows and columns
  result.push(nestArr);
  nestArr = [];  
return result;  
*/

const transpose = function (matrix) {
  // Put your solution here
  let result = [];
  let nestArr = [];
  for (let row = 0; row < matrix[0].length; row++) {
    for (let column = 0; column < matrix.length; column++) {
      nestArr.push(matrix[column][row]);
    }
    result.push(nestArr);
    nestArr = [];
  }
  return result;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

module.exports = { transpose };
