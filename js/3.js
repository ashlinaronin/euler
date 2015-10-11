/********** Largest prime factor
** The prime factors of 13195 are 5, 7, 13 and 29.
** Prime factors are primes that together multiply to the desired number.
**
** What is the largest prime factor of the number 600851475143 ? */

var primeFactors = function(number) {
  // Now try with all primes up to the given number
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


// var largestPrimeFactor = function(number) {
//   var factors = primeFactors(number);
//   return factors[factors.length-1];
// };




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
    var allNumbers = numberList(number);

    // Loop through all primes that might have a multiple
    for(var prime = 2; prime <= (number/prime); prime++) {

        // Remove all multiples of this prime from the number list
        for (var indexToCheck = 0; indexToCheck < allNumbers.length; indexToCheck++) {
            if ((allNumbers[indexToCheck] % prime === 0) && (allNumbers[indexToCheck] !== prime)) {
                allNumbers.splice(indexToCheck, 1);
            } else {
              // console.log(allNumbers[indexToCheck] + " is prime");
            }
        }
    }

    console.log(allNumbers);
    return allNumbers;
}


var largestPrimeFactor = function(number) {
    var allNumbers = numberList(number);

    // Loop through all primes that might have a multiple

    // now go from top down
    // for (var i = number; i >= (number/2); i--) {
    //   // console.log("i is " + i);
    //   for (var indexToCheck = 0; i < allNumbers.length; indexToCheck++) {
    //     if ((allNumbers[indexToCheck] % i !== 0) && (allNumbers[indexToCheck] === i)) {
    //       console.log('allNumbers[' + indexToCheck + ']=' + allNumbers[indexToCheck]);
    //       return allNumbers[indexToCheck];
    //     }
    //   }
    // }


    for(var prime = number; prime >= 2; prime--) {
      // console.log("prime for index is " + prime);

        // Remove all multiples of this prime from the number list
        for (var indexToCheck = allNumbers.length-1; indexToCheck >= 0; indexToCheck--) {
          // console.log('indexTocheck is ' + indexToCheck);

            // // if this number is divisible
            // if ((allNumbers[indexToCheck] % prime !== 0) && (number % allNumbers[indexToCheck] === 0)) {
            //   console.log("prime factor: " + allNumbers[indexToCheck]);
            //   return allNumbers[indexToCheck];
            // }

            if ((allNumbers[indexToCheck] % prime === 0) && (allNumbers[indexToCheck] !== prime)) {
                // allNumbers.splice(indexToCheck, 1);
                // do nothing
                // console.log('')
            } else {
              // we've gotten to the biggest prime, check if it's a factor
              if (number % allNumbers[indexToCheck] === 0) {
                console.log("prime factor: " + allNumbers[indexToCheck]);
                //
                return allNumbers[indexToCheck];
              }


            }
        }
    }

    // return -1;
    // console.log(allNumbers);
    return -1;
}
