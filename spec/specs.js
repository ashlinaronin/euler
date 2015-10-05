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
  it('sums the first 10 terms in the fibonacci sequence', function() {
    expect(fibonacci(10)).to.equal(231);
  });

});
