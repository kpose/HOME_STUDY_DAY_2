'use strict'
 
function words(word) {
  var splitWord = word.split(" ");
  var countWord = Object.create(null);
  countWord = {};
  
  for (var i = 0;i<splitWord.length;i++) {
    var startWord = splitWord[i];
      if (countWord.hasOwnProperty(startWord)) {
          countWord[startWord]++;
      } 
      else {
          countWord[startWord] = 1;
      }
  }
  return countWord;
}

module.exports = words;
