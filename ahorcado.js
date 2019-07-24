let solucion='pepe'
aciertos = 0 // contenedor
errores = 0 // contador
let intento=""
let letrasUsadas = []
while(errores<3 && aciertos != solucion.length){
  while (intento.length != 1 && errores<3){
    intento= prompt("Escoge una letra")
  }
  contiene = solucion.match(new RegExp(intento,'g'))
  console.log(contiene)
  if (contiene){
    aciertos += contiene.length
    console.log("ACIERTO")
    console.log("aciertos: "+aciertos)
  } else {
    errores++
    console.log("ERROR")
    console.log("errores: "+errores)
  }

  intento=""
}
if (aciertos == solucion.length){
  console.log("Has ganado")
} else{
  console.log("Has perdido")
}