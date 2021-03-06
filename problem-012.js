/*

Highly divisible triangular number

The sequence of triangle numbers is generated by adding the natural numbers.
So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28

We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?

*/

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
