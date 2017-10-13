function reverseString(myWord) {
  
  var reversedWord = ""
  for (var i = myWord.length-1; i >= 0; i--) {
    reversedWord = reversedWord + myWord[i]
  }
  
  return reversedWord
}

console.log(reverseString(prompt("Give me input")))
