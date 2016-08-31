if ARGV[0].nil?
	x=50
else
	x=ARGV[0].to_i
end

for i in 1..x
	if i%15==0
		puts "FizzBuzz"
	elsif i%3==0
		puts "Fizz"
	elsif i%5==0
		puts "Buzz"
	else
		puts i
	end
end