//includes 0 as positive
function isNumberPositive(number) {
  if (number >= 0) {
    return true;
  } else if (number < 0) {
    return false;
  } else {
    return "invalid input";
  }
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(0));
console.log(isNumberPositive(1));

//Function which converts number of days to number of (complete) years
const convertDaysToYears = (days) => {
  return Math.floor(days / 365);
};
console.log(convertDaysToYears(365));
console.log(convertDaysToYears(3650));
console.log(convertDaysToYears(3750));
console.log(convertDaysToYears(6570));

//function which returns the largest of 3 numbers
function returnLargestNumber(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else if (num3 >= num1 && num3 >= num2) {
    return num3;
  } else {
    return "This doesn't work";
  }
}

console.log(returnLargestNumber(1, 2, 3));
console.log(returnLargestNumber(1, 1, 3));
console.log(returnLargestNumber(1, 2, 2));
console.log(returnLargestNumber(2, 2, 2));

//Returns last name in the array
function getLastName(nameArr) {
  return nameArr[nameArr.length - 1];
}
console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Charlie", "Rob", "Andy", "Josh", "Ben"]));
console.log(getLastName(["Ash"]));

//Returns true if all numbers are positive, false otherwise
function allPositive(numArr) {
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < 0) {
      return false;
    }
  }
  return true;
}
console.log(allPositive([1, 2, 3]));
console.log(allPositive([1, -2, 3]));
console.log(allPositive([1, 2, -3]));
