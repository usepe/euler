/*

Largest palindrome product

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

var a, b, until = 1000, number, maxNumber = 0

function isPalindrome (num) {
  var strNum = String(num), bottom = 0, top = strNum.length - 1

  while (strNum.charAt(bottom) === strNum.charAt(top) && bottom < top) {
    bottom++
    top--
  }

  return bottom === (strNum.length / 2)
}

for (a = 100; a < until; a++) {
  for (b = 100; b < until; b++) {
    number = a * b
    if (isPalindrome(number) && maxNumber < number) {
      maxNumber = number
    }
  }
}

console.log(maxNumber)