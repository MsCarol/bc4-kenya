describe("FizzBuzz Test", function () {

	it("fizz_buzz(3n)", function () {
    
    expect(fizz_buzz(3)).toBe("fizz");
    expect(fizz_buzz(33)).toBe("fizz");
    expect(fizz_buzz(63)).toBe("fizz");

	});

	it("fizz_buzz(5n)", function () {
    
    expect(fizz_buzz(5)).toBe("buzz");
    expect(fizz_buzz(55)).toBe("buzz");
    expect(fizz_buzz(95)).toBe("buzz");

	});
	it("fizz_buzz(15n)", function () {
    
    expect(fizz_buzz(75)).toBe("fizzbuzz");
    expect(fizz_buzz(60)).toBe("fizzbuzz");
    expect(fizz_buzz(-1500)).toBe("fizzbuzz");

	});


	it("Non multiples of 3 or 5", function () {
    
    expect(fizz_buzz(31)).toBe(31);
    expect(fizz_buzz(46)).toBe(46);
    expect(fizz_buzz(58)).toBe(58);

	});

	it("Non numbers", function () {

    expect(fizz_buzz("be")).toBe(false);
    expect(fizz_buzz("may")).toBe(false);
	});

});