/*

1000-digit Fibonacci number

The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

function sum (a, b, acc = '', carry = 0) {
  if (!(a.length || b.length || carry)) return acc.replace(/^0+/, '')

  carry = carry + (~~a.pop() + ~~b.pop())
  acc = carry % 10 + acc
  carry = carry > 9
  
  return sum(a, b, acc, carry)
}

function sumStr (a, b) {
  if (a === '0' && b === '0') return '0'
  return sum(a.split(''), b.split(''))
}

function* fibonacci () {
  let current = '1', next = '1', aux, index = 1

  while (true) {
    yield { index, current }

    aux = current
    current = next
    next = sumStr(aux, current)

    index++
  }
}

const fib = fibonacci()

let done = false

while (!done) {
  const next = fib.next()

  if (next.value.current.length === 1000) {
    console.log(next.value.index)
    done = true
  }
}
