/*

Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a ^ 2 + b ^ 2 = c ^ 2

For example, 3 ^ 2 + 4 ^ 2 = 9 + 16 = 25 = 5 ^ 2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

var found = 1000, n = 2, m, a, b, c, actual = 0;

while (actual < found) {
  m = 1;
  while (m < n) {
    a = Math.pow(n, 2) - Math.pow(m, 2);
    b = 2 * n * m;
    c = Math.pow(n, 2) + Math.pow(m, 2);
    if (a + b + c === found) {
      actual = a * b * c;
    }
    m++;
  }
  n++;
}

console.log(actual);