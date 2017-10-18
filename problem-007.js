/*

10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

var search = 10001, primeCount = 0, index = 1

function isPrime (num) {
  var divisors = 2, index = 2

  while (index <= Math.sqrt(num)) {
    if (num % index === 0) {
      divisors++
    }
    index++
  }

  return divisors === 2
}

while (primeCount < search) {
  index++
  if (isPrime(index)) {
    primeCount++
  }
}

console.log(index)
