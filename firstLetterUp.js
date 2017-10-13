function firstLetterUp(str) {
  
  var myArray = str.split(" ")
  
  for (var i=0; i < myArray.length; i++)
  {
    myArray[i] = myArray[i][0].toUpperCase() + myArray[i].slice(1)
  }
  
  return myArray.join(" ")
 
}

console.log(firstLetterUp(prompt("Give me input")))
