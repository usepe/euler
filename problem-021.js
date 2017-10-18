function divisorsSum (n) {
  var total = 0, i = 1

  while (i <= n / 2) {
    if (n % i === 0) {
      total += i
    }
    i++
  }

  return total
}

var total = 0

for (var a = 1; a < 10000; a++) {
  var b = divisorsSum(a)
  if (b !== a && a === divisorsSum(b)) {
    total += b + a
  }
}

console.log(total / 2)