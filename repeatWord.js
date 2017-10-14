function repeatString(str, num) {
  
  var result = ""
  
  if (num < 0) {
    return
  } else {
  for (var i=0; i < num; i++) {
    result = result + str
  }
  
    return result
  }

}

console.log(repeatString(prompt("Give me input word"), prompt("Give me input number")))
