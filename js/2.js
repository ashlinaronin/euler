/* Each new term in the Fibonacci sequence is generated by
** adding the previous two terms. By starting with 1 and 2,
** the first 10 terms will be:
** 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
**
** By considering the terms in the Fibonacci sequence
** whose values do not exceed four million, find the sum
** of the even-valued terms. */

// Create two vars for keeping track of two adjacent fibonacci values.
var fibonacci = function(number) {
  var output = [];
  var i = 0;
  var j = 1;

  // Generate number amount of fibonacci numbers
  while (output.length < number) {
    var thisFib = i + j;
    output.push(thisFib);

    // On first iteration, we need to check if i is still 0
    // so that we don't reset j to 0 by accident.
    if (i === 0) {
      j = 1;
    } else {
      j = i;
    }

    // Need to update i value after j so that j can take i's old value first
    i = thisFib;
  }
  return output;
}

var sumFib = function(number) {
  var arrayResults = fibonacci(number);
  var sum = 0;

  for (var i = 0; i < arrayResults.length; i++) {
    sum += arrayResults[i];
  }

  return sum;
}

var sumEvenFib = function(number) {
  var arrayResults = fibonacci(number);
  var sum = 0;

  for (var i = 0; i < arrayResults.length; i++) {
    if (arrayResults[i] % 2 === 0) {
      sum += arrayResults[i];
    }
  }

  return sum;

}

var fibValuesLessThan = function(number) {
  var sum = 0;
  var i = 0;
  var j = 1;

  // Do..while so it runs at least once. Before running again
  // the loop checks if the next number is less than 200.
  // If so, it checks if this number is even and then adds it to the sum.
  do {
    var thisFib = i + j;

    // If even, add this fib to sum
    if (thisFib % 2 === 0) {
      sum += thisFib;
    }

    // On first iteration, we need to check if i is still 0
    // so that we don't reset j to 0 by accident.
    if (i === 0) {
      j = 1;
    } else {
      j = i;
    }

    // Need to update i value after j so that j can take i's old value first
    i = thisFib;
  } while ((i + j) < number);

  return sum;
}
