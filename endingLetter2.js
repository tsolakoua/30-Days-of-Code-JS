function confirmEnding(str, target) {
  
  if (str.substr(-target.length) === target) {
    return true
  } else return false
 
}

var word = console.log(prompt("Give me a word"))
var ending = console.log(prompt("Give me the ending letter of the word"))
confirmEnding(word, ending)
