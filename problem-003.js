/*

Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

var input = 600851475143, index

function isPrime (num) {
  var divisors = 2, index = 2

  while (index < Math.sqrt(num)) {
    if (num % index === 0) {
      divisors++
    }
    index++
  }

  return divisors === 2
}

for (index = Math.ceil(Math.sqrt(input)); index > -1; index--) {
  if (input % index === 0 && isPrime(index)) {
    break
  }
}

console.log(index)
