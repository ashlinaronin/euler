/********** Largest prime factor
** The prime factors of 13195 are 5, 7, 13 and 29.
** Prime factors are primes that together multiply to the desired number.
**
** What is the largest prime factor of the number 600851475143 ? */

var primeFactors = function(number) {
  // First, get all primes up to the given number
  var primesUpTo = primes(number);
  var primeFactors = [];

  // Go through primes array from biggest one to smallest
  for (var i = primesUpTo.length; i >= 0; i--) {
    // If number is divisible by this prime, add it to prime factors array
    // Unshift to ensure we get prime factors in ascending order
    if (number % primesUpTo[i] === 0) {
      primeFactors.unshift(primesUpTo[i]);
    }
  }

  return primeFactors;
};


var largestPrimeFactor = function(number) {
  var factors = primeFactors(number);
  return factors[factors.length-1];
};




// Borrow the sieve of eratosthenes to get all primes up to the given number
// I wrote this with Sam Maturen for an earlier Epicodus assignment on 9-Sep-2015.
var numberList = function(number) {
    var numberArray = [];

    for (var i = 2; i <= number; i++) {
        numberArray.push(i);
    }

    return numberArray;
};

var primes = function(number) {
    var primes = [2];
    var allNumbers = numberList(number);

    // Loop through all primes that might have a multiple
    for(var prime = 2; prime <= (number/prime); prime++) {

        // Remove all multiples of this prime from the number list
        for (var indexToCheck = 0; indexToCheck < allNumbers.length; indexToCheck++) {
            if ((allNumbers[indexToCheck] % prime === 0) && (allNumbers[indexToCheck] !== prime)) {
                allNumbers.splice(indexToCheck, 1);
            }
        }
    }

    return allNumbers;
}
