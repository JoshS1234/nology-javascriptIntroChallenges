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

const convertDaysToYears = (days) => {
  return Math.floor(days / 365);
};
console.log(convertDaysToYears(365));
console.log(convertDaysToYears(3650));
console.log(convertDaysToYears(3750));
console.log(convertDaysToAge(6570));
