/*

Lattice paths

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

*/

var n = 20, paths

function factorial (n) {
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

paths = factorial(2 * n) / Math.pow(factorial(n), 2)

console.log(paths)
