function calculateRectangleArea(length, width) {
  var recResult = length * width;
  if (recResult <= 0) {
    return undefined
  } else {
    return recResult
  }
}

function calculateTriangleArea(base, height) {
  var triResult = base * (height / 2);
  if (triResult <= 0) {
    return undefined
  } else {
    return triResult
  }
}

function calculateCircleArea(radius) {
  //var cirResult = (Math.PI * Math.pow(radius, 2)).toFixed(3);
  var cirResult = Math.PI * Math.pow(radius, 2);
  if (radius < 0) {
    return undefined
  } else {
    return cirResult
  }
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(-1, 0));    // should print undefined

//console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(-1, 0)); // should print undefined

//console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(20)); // should print 38.484...
console.log(calculateCircleArea(1.5)); // should print undefined

//Running Test: calculateCircleArea circle of radius 20 has area 1256.636
//Running Test: calculateCircleArea circle of radius 1.5 has area 7.069
//Running Test: calculateCircleArea circle of radius -1 has area undefined

// orig circle
//console.log(calculateCircleArea(10)); // should print 314.159...
//console.log(calculateCircleArea(3.5)); // should print 38.484...
//console.log(calculateCircleArea(-1)); // should print undefined