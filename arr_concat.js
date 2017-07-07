//Define a function concat, which, given two arrays, concatenates the arrays together.

function concat(sArray, eArray) {
  var newArray = sArray;
  var newArrayFinalLength = (sArray.length + eArray.length);
  var i = 0;

  //console.log(newArrayFinalLength);
  //console.log(newArray);

  while (newArray.length < newArrayFinalLength) {
    newArray.push(eArray[i]);
    i++;
    //console.log("eArray[i] is currently: " + i);
  }
  return newArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);


// look at the length of eArray
// get position 0 in eArray
// push positin 0 in eArray to end of Array
// repeat until no more positions in eArray