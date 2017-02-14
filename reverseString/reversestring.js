'use strict'
 
function reverseString(word) {
  var reverse = "";
  
  if (word === '') {
    return null;
  }
  else {
    var i = word.length - 1;
    while (i >= 0) {
      reverse = reverse + word[i];
      i--;
    }
    
    if (word === reverse) {
      return true;
    }
    else {
      return reverse;
    }
  }
}

module.exports = reverseString;
