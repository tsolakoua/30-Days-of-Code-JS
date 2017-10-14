function repeatString(str, num) {
  
  var result = ""
  
  if (num < 0) {
    return ""
  } else if (num === 1) {
    return str 
  } else {
    return str + repeatString(str, num -1)
  }
  
}

console.log(repeatString(prompt("Give me input word"), prompt("Give me input number")))
