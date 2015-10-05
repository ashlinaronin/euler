describe('sumMultiples', function() {
    it('lists out all natural numbers below 10 that are multiples of 3 or 5', function() {
      expect(sumMultiples(10)).to.equal(23);
    });

    it('lists out all natural numbers below 30 that are multiples of 3 or 5', function() {
      expect(sumMultiples(30)).to.equal(195);
    });
});
