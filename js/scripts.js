var palindrome = function(input) {
  var newInput = input.split("").reverse().join('');
  if (newInput === input) {
    return true;
  } else {
    return false;
  }
};
