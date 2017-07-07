//Define a function lastIndexOf, which, given an array and a value, returns the index of the last position the value occurs in the array.
//If the value never occurs, the function should return -1.
//lastIndexOf([ 0, 1, 4, 1, 2 ], 1); outputs "3"

function lastIndexOf(array,value) {

  var arrayPos = (array.length - 1);
  var arrayVal = null;

for (arrayPos; arrayPos !== -1; arrayPos--) {
  if (array[arrayPos] == value) {
    return arrayPos;
  }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);