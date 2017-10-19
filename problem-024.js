/*

Lexicographic permutations

A permutation is an ordered arrangement of objects.
For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.

If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.

The lexicographic permutations of 0, 1 and 2 are:

  012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

*/

const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function* lexicographic (seed) {
  let notLast = true, next = [...seed]

  while (notLast) {
    yield next

    let i = next.length - 1

    // O(n) => identify the longest non increasing suffix
    // (one that have something smaller at it left side)
    while (i > 0 && next[i - 1] >= next[i]) {
      i--
    }

    // If I had no smaller element at the left (pivot), then it was my last iteration
    if (i <= 0) notLast = false


    let j = next.length - 1

    // O(n) => find the largest index for which the pivot is smaller
    // (that will be the smallest in the streak)
    while (next[j] <= next[i - 1]) {
      j--
    }

    // swap them out to get the minimal change for this iteration
    let aux = next[i - 1]
    next[i - 1] = next[j]
    next[j] = aux

    // sort the suffix (all that's between the pivot and the minimal change) swaping them
    j = next.length - 1
    while (i < j) {
      aux = next[i]
      next[i] = next[j]
      next[j] = aux
      i++
      j--
    }
  }
}

const gen = lexicographic(input)

let i = 0, next

while (i < 1000000) {
  next = gen.next()
  i++
}

console.log(next.value.join(''))
