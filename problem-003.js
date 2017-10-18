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
