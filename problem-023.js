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