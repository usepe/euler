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
