var sum = 0, i, len

for (i = 0, len = 1000; i < len; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i
  }
}

console.log(sum)
