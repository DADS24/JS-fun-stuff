var a = 5
let b = 6
console.log(""+a+b)
console.log(String(a)+b)
console.log(a+b)

var array = [1,2,3,4]

for(i = 0;i<array.length;i++){
  console.log(i)
  
}
array.forEach(function(e){
  // EcmaScript 5
  console.log(e)
},this)

array.forEach(e => {
  // EcmaScript 6
  console.log(e)
})

array2 = array.map(e=>{
  return e+1
})

suma = array.reduce((valorAnterior, valorActual, indice)=>{
  if (valorActual % 2){
    return valorAnterior+valorActual
  } else {
    return valorAnterior
  }  
  
},0)
console.log(suma)
console.log(array)
console.log(array2)