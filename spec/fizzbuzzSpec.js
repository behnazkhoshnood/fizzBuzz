describe("My fizzBuzz function", function() {
        beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });

    describe("My number", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return Fizz when called as fizzBuzz(12)", function() {
            var result = fizzBuzz(12)
            expect(result).toBe("Fizz");
        });

        it("should return Buzz when called as fizzBuzz(20)", function() {
            var result = fizzBuzz(20)
            expect(result).toBe("Buzz");
        });

        it("should return FizzBuzz when called as fizzBuzz(30)", function() {
            var result = fizzBuzz(30)
            expect(result).toBe("FizzBuzz");
        });
        it("should return 14 when called as fizzBuzz(14)", function() {
            var result = fizzBuzz(14)
            expect(result).toBe(14);
        });
        
        it("should not return if it's not a number",function(){
            var result = fizzBuzz("two");
            expect(result).toBe("Error!")
        });
    });
}); 