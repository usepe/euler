/*

Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:

  n → n/2 (n is even)
  n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

var maxChain = 0, number = 0, idx, aux

function collatz (n) {
  var chain = [n]

  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1
    chain.push(n)
  }

  return chain.length
}

for (idx = 1; idx < 1000000; idx++) {
  aux = collatz(idx)
  if (maxChain < aux) {
    maxChain = aux
    number = idx
  }
}

console.log({ max: maxChain, number: number })