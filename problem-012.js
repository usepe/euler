var search = 500, divisors = 0, number = 0, last = 1

function mcm (num) {
  var index = 0, divisors = {}, total = 1

  if (num === 1) {
    return 1
  }

  index = 1
  while (num > 1) {
    index += 1
    if (num % index === 0) {
      num = num / index
      if (typeof divisors[index] === 'undefined') {
        divisors[index] = 0
      }
      divisors[index] += 1
      index = 1
    }
  }

  for (index in divisors) {
    if (divisors.hasOwnProperty(index)) {
      total *= (1 + divisors[index])
    }
  }

  return total
}

while (divisors < search) {
  number += last
  last += 1

  divisors = mcm(number)
}

console.log(number)
