/*

Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

var from, to, number, done = false, index = 1

while (!done) {
  index++;
  for (from = 1, to = 20; from <= to; from++) {
    if (index % from !== 0) {
      break;
    }
  }
  if (from === to + 1) {
    done = true;
  }
}

console.log(index);
