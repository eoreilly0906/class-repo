// TODO: Import `basicmath.js`
import basicmath from './basicmath.js';
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2]; 
const numOne = Number(parseInt(process.argv[3]));
const numTwo = Number(parseInt(process.argv[4]));
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
switch (operation) {
  case 'sum':
    console.log(basicmath.sum(numOne, numTwo));
    break;
  case 'difference':
    console.log(basicmath.difference(numOne, numTwo));
    break;
  case 'product':
    console.log(basicmath.product(numOne, numTwo));
    break;
}