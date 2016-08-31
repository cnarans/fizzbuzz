if(process.argv[2]==null){
	var x = 50;
}
else{
	var x = process.argv[2];
}

for(var i=1; i<=x; i++) {
	if(i%15==0){
		console.log("FizzBuzz");
	}
	else if(i%3==0){
		console.log("Fizz");
	}
	else if(i%5==0){
		console.log("Buzz");
	}
	else{
		console.log(i)
	}
}