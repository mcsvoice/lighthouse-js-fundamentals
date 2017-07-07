//Write a program that prints the numbers from 100 to 200 to the console, with three exceptions:

//If the number is a multiple of 3, print the string "Loopy" instead of the number.
//If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
//If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
//By print, we are of course referring to console.log.

var startnum
var endnum
//var currnum

startnum = 100
endnum = 200

//function count() {
for (var currnum = startnum; currnum < endnum + 1; currnum++) {
  if ((currnum % 3 == 0) && (currnum % 4 == 0) == true) {
    console.log("LoopyLighthouse");
  } else if ((currnum % 3 == 0) && (currnum % 4 !== 0) == true){
    console.log("Loopy");
  } else if ((currnum % 3 !== 0) && (currnum % 4 == 0) == true) {
    console.log("Lighthouse");
  } else {
    console.log(currnum);
  }

}
//}

//for (var i = 0; i < packingList.length; i++) {
//  console.log(packingList[i]);
//}