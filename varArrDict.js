let nombre = "Pepe"
let arrayNombre= [nombre]
console.log(arrayNombre)
// Arrays
arrayNombre = []
arrayNombre.push(nombre)
console.log(arrayNombre)
// Dict
let dictNombre = {}
// var to dict
dictNombre[nombre]=nombre

console.log(dictNombre)
console.log(dictNombre[nombre])

// Array to dict
dictNombre[arrayNombre[0]] = arrayNombre[0] + "fromArray"
console.log(dictNombre)
