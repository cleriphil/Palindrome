var palindrome = function(input) {
  debugger;
  var inputArray = input.split("");
  var newInput = inputArray.reverse().join('');
  if (newInput === input) {
    return true;
  } else {
    return false;
  }
};
