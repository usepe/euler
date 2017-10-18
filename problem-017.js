function numberAsString (n) {
  var numbers = {
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      1000: 'onethousand'
    },
    from20to29 = 'twenty',
    from30to39 = 'thirty',
    from40to49 = 'forty',
    from50to59 = 'fifty',
    from30to90endedIn = 'ty',
    fromHundred = 'hundred',
    separator = 'and',
    aux,
    append,
    dec,
    unit,
    decUnit,
    cent

  if (numbers[n]) {
    return numbers[n]
  }

  if (n >= 20 && n < 30) {
    aux = n - 20
    return from20to29 + numbers[aux]
  }

  if (n >= 30 && n < 40) {
    aux = n - 30
    return from30to39 + numbers[aux]
  }

  if (n >= 40 && n < 50) {
    aux = n - 40
    return from40to49 + numbers[aux]
  }

  if (n >= 50 && n < 60) {
    aux = n - 50
    return from50to59 + numbers[aux]
  }

  if (n >= 60 && n < 100) {
    append = from30to90endedIn
    if (n >= 80 && n < 90) {
      append = from30to90endedIn.substr(1)
    }

    dec = Number(String(n).charAt(0))
    unit = Number(String(n).substr(1))

    return numbers[dec] + append + numbers[unit]
  }

  if (n >= 100 && n < 1000) {
    decUnit = Number(String(n).substr(1))
    cent = Number(String(n).charAt(0))
    if (decUnit > 0) {
      return numbers[cent] + fromHundred + separator + numberAsString(decUnit)
    } else {
      return numbers[cent] + fromHundred
    }
  }
}

var total = ''
for (var i = 1; i < 1001; i++) {
  total += numberAsString(i)
}

console.log(total.length)