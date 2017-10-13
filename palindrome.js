function palindome(str) {
  
  var myRegex = /[\W_]/g;
  var regString = str.toLowerCase().replace(myRegex, "")
  
  var reversedWord = regString.split("").reverse().join("")
  
  if (str === reversedWord) {
    return str+" is palindome"
  } else {
    return str+" is not palindome"
  }
  
}

console.log(palindome(prompt("Give me input")))
