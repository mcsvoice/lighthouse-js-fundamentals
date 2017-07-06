function whichSchool(age) {
  var eAge = 13 //12
  var aAge = 18 //18
  if (age < eAge) {
    return "Elementary School";
  } else if (age > aAge) {
    return "Lighthouse Labs";
  } else {
    return "Secondary School";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));


//if (time < 10) {
//    greeting = "Good morning";
//} else if (time < 20) {
//    greeting = "Good day";
//} else {
//    greeting = "Good evening";
//}



// function sayHello(name) {
//  console.log("Hello, " + name);
//}