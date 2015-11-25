function fizz_buzz (num) {

	if (num % 15 === 0) {
	return "fizzbuzz";
	}

	if(num % 3 === 0) {
	return "fizz";
	}

	if (num % 5 === 0) {
	return "buzz";
	}
    if (isNaN(num)) {
    return false;
    }

    return num;
}

console.log(fizz_buzz(45));
