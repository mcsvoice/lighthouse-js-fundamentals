function range(start,end,step) {
  var fArray = [];
  var cStart = start;
  var cStep = null;

  if (start == null) {
    console.log("start value null");
    return [];
  } else if (end == null) {
    console.log("end value null");
    return [];
  } else if (step == null) {
    console.log("step value null");
    return [];
  } else if (start > end) {
    console.log("start greater than end");
    return[];
  } else if (step < 0) {
    console.log("step is negative")
    return[];
  } else

fArray.push(start)

  while (end > cStart) {
    cStart = cStart + step;
    fArray.push(cStart);
  }

  return fArray
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));