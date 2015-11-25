describe ('This', function () {
var hello = function (name) {
console.log(name);
};
	it('it should', function () {
      spyOn(console,'log').andCallThrough();
      expect(console.log).toHabeBeenCalled();

      expect(0.24).toBeClose(0.25);
      expect(2).toBeGreaterThan(1);
      expect(hello).toThrow(new Error('Maviza'));

      
	});
});  

