sundays = 0

from datetime import date, timedelta

date_from = date(1901, 1, 1)
date_to = date(2000, 12, 1)
step = timedelta(1)

last_month = 0
while date_from < date_to:
  if last_month != date_from.month:
    if date_from.weekday() == 6:
      sundays += 1

    last_month = date_from.month

  date_from += step

print "There was " + str(sundays) + " sundays"