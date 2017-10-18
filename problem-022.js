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