var professor = {
  "name": "Oscar",
  "age" : 30,
  "professor" : "Computer Science",
  "classes" : [5, 2, 3]
}

console.log(professor.name)
console.log(professor.classes)

// add new propery value pair
professor["hobby"] = "music"
console.log(professor.hobby)

// print all elements
console.log(professor)

// delete property value pair
delete professor["classes"]
