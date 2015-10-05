describe('1. sumMultiples', function() {
  it('sums all natural numbers below 10 that are multiples of 3 or 5', function() {
    expect(sumMultiples(10)).to.equal(23);
  });

  it('sums all natural numbers below 30 that are multiples of 3 or 5', function() {
    expect(sumMultiples(30)).to.equal(195);
  });

  it('sums all natural numbers below 1000 that are multiples of 3 or 5', function() {
    expect(sumMultiples(1000)).to.equal(233168);
  });
});

describe('2. fibonacci', function() {
  it('generates the first 10 terms in the fibonacci sequence', function() {
    expect(fibonacci(10)).to.eql([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });

  it('sums the first 10 terms in the fibonacci sequence', function() {
    expect(sumFib(10)).to.equal(231);
  });

  it('sums the even terms in the first 10 numbers of the fibonacci sequence', function() {
    expect(sumEvenFib(10)).to.equal(44);
  });

});
