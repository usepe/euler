"""

Factorial digit sum

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

"""

i = 100
fact = 1

while i > 0:
  fact *= i
  i -= 1

total = 0

for number in str(fact):
  total += int(number)

print total