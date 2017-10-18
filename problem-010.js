/*

Summation of primes


The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

var until = 2000000, index, sum = 0

function isPrime (num) {
  var divisors = 0, index = 1;

  while (index <= Math.sqrt(num)) {
    if (num % index === 0) {
      divisors++
    }
    index++
  }

  return divisors === 1
}

index = 2
while (index < until) {
  if (isPrime(index)) {
    sum += index
  }
  index++
}

console.log(sum)