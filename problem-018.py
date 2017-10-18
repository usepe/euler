"""

Maximum path sum I

By starting at the top of the triangle below and moving to adjacent numbers on the row below,
the maximum total from top to bottom is 23.

       3
      7 4
     2 4 6
    8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

                75
               95 64
              17 47 82
             18 35 87 10
            20 04 82 47 65
           19 01 23 75 03 34
          88 02 77 73 07 63 67
         99 65 04 28 06 16 70 92
        41 41 26 56 83 40 80 70 33
       41 48 72 33 47 32 37 16 94 29
      53 71 44 65 25 43 91 52 97 51 14
     70 11 33 28 77 73 17 78 39 68 17 57
    91 71 52 38 17 14 91 43 58 50 27 29 48
   63 66 04 68 89 53 67 30 73 16 69 87 40 31
  04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route.
However, Problem 67, is the same challenge with a triangle containing one-hundred rows;
it cannot be solved by brute force, and requires a clever method! ;o)

"""

import copy

triangle = []
triangle.append([75])
triangle.append([95,64])
triangle.append([17,47,82])
triangle.append([18,35,87,10])
triangle.append([20,4,82,47,65])
triangle.append([19,1,23,75,3,34])
triangle.append([88,2,77,73,7,63,67])
triangle.append([99,65,4,28,6,16,70,92])
triangle.append([41,41,26,56,83,40,80,70,33])
triangle.append([41,48,72,33,47,32,37,16,94,29])
triangle.append([53,71,44,65,25,43,91,52,97,51,14])
triangle.append([70,11,33,28,77,73,17,78,39,68,17,57])
triangle.append([91,71,52,38,17,14,91,43,58,50,27,29,48])
triangle.append([63,66,4,68,89,53,67,30,73,16,69,87,40,31])
triangle.append([04,62,98,27,23,9,70,98,73,93,38,53,60,4,23])

triangle_sum = copy.deepcopy(triangle)

row = 0
while row < len(triangle) - 1:
  column = 0
  while column < len(triangle[row]):
    if triangle_sum[row + 1][column] == triangle[row + 1][column]: #if not modified
      triangle_sum[row + 1][column] = triangle[row + 1][column] + triangle_sum[row][column]
    else:
      if triangle_sum[row + 1][column] < triangle[row + 1][column] + triangle_sum[row][column]:
        triangle_sum[row + 1][column] = triangle[row + 1][column] + triangle_sum[row][column]

    if triangle_sum[row + 1][column + 1] == triangle[row + 1][column + 1]: #if not modified
      triangle_sum[row + 1][column + 1] = triangle[row + 1][column + 1] + triangle_sum[row][column]
    else:
      if triangle_sum[row + 1][column + 1] < triangle[row + 1][column + 1] + triangle_sum[row][column]:
        triangle_sum[row + 1][column + 1] = triangle[row + 1][column + 1] + triangle_sum[row][column]

    column += 1
  row += 1

maximum = 0
for number in triangle_sum[len(triangle_sum) - 1]:
  if number > maximum:
    maximum = number

print "Founded: " + str(maximum)