describe('multipleThreeFive', function() {
    it('lists out all natural numbers below 10 that are multiples of 3 or 5', function() {
      expect(multipleThreeFive(10)).to.eql([3,5,6,9]);
    });
});


//
// describe('columnCount', function() {
//     it("returns the square root for an input with a whole number square root", function() {
//         // 64 character input -> 8 columns
//         var inputString = "don't compare yourself to others, compare yourself person you were yesterday";
//         var flattenedString = format(inputString);
//
//         expect(columnCount(flattenedString)).to.equal(8);
//     });
//
//     it("returns the square root for an input with a smaller whole number square root", function() {
//         // 16 character input -> 4 columns
//         var inputString = "Portlands NachoWk!";
//         var flattenedString = format(inputString);
//
//         expect(columnCount(flattenedString)).to.equal(4);
//     });
//
//     it("handles a non-whole-number whole root case", function() {
//         // 69 character input -> 9 columns
//         var inputString = "don't compare yourself to others, compare yourself to the person you were yesterday";
//         var flattenedString = format(inputString);
//
//         expect(columnCount(flattenedString)).to.equal(9);
//     });
// });
