/*

Names scores

Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into
alphabetical order.

Then working out the alphabetical value for each name, multiply this value by its alphabetical position in
the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53,
is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

*/

const fs = require('fs')

const letters = 'abcdefghijklmnopqrstuvwxyz'

let names = fs.readFileSync('./names.txt', 'utf-8').replace(/"/g, '').toLowerCase().split(',').sort()

let grandTotal = 0
for (let j = 0; j < names.length; j++) {
  let name = names[j]
  let total = 0
  for (var i = 0; i < name.length; i++) {
    total += letters.indexOf(name.charAt(i)) + 1
  }

  grandTotal += (names.indexOf(name) + 1) * total
}

console.log(grandTotal)