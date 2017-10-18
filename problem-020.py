i = 100
fact = 1

while i > 0:
  fact *= i
  i -= 1

total = 0

for number in str(fact):
  total += int(number)

print total