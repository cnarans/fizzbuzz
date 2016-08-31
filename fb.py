import sys

if len(sys.argv) < 2:
	x = 50
else:
	x = int(sys.argv[1])

for i in range (1, (x+1)):
	if i%15==0:
		print("FizzBuzz")
	elif i%3==0:
		print("Fizz")
	elif i%5==0:
		print("Buzz")
	else:
		print(i)