/*

Sum square difference

The sum of the squares of the first ten natural numbers is,

1 ^ 2 + 2 ^ 2 + ... + 10 ^ 2 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10) ^ 2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of
the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the
square of the sum.

*/

var input = 100

function sumSquares (num) {
  var index, sum = 0;

  for (index = 1; index <= num; index++) {
      sum += Math.pow(index, 2)
  }

  return sum
}

function squareSums (num) {
  var index, sum = 0
  
  for (index = 1; index <= num; index++) {
    sum += index
  }

  return Math.pow(sum, 2)
}

console.log(squareSums(input) - sumSquares(input));
