describe('multipleThreeFive', function() {
    it('lists out all natural numbers below 10 that are multiples of 3 or 5', function() {
      expect(multipleThreeFive(10)).to.eql([3,5,6,9]);
    });

    it('lists out all natural numbers below 30 that are multiples of 3 or 5', function() {
      expect(multipleThreeFive(30)).to.eql([3,5,6,9,10,12,15,18,20,21,24,25,27]);
    });
});
