/*

Non-abundant sums


A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a
perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if
this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the
sum of two abundant numbers is 24.

By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two
abundant numbers.

However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest
number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

*/

const divisors = (n) => {
  const d = []

  for (let i = 0, len = n / 2; i <= len; i++) {
    if (n % i === 0) d.push(i)
  }

  return d
}

const sumup = (an) => {
  let sum = 0

  for (let i = 0, len = an.length; i < len; i++) {
    sum += an[i]
  }

  return sum
}

const abundant = (n) => sumup(divisors(n)) > n

const abundants = []

for (let i = 12, len = 28123; i < len; i++) {
  if (abundant(i)) abundants.push(i)
}

const sums = []

for (let i = 0, len = abundants.length; i < len; i++) {
  for (let j = 0; j < len; j++) {
    sums.push(abundants[i] + abundants[j])
  }
}

const notInSum = []

for (let i = 0; i < 28123; i++) {
  if (sums.indexOf(i) === -1) notInSum.push(i)
}

console.log(sumup(notInSum))