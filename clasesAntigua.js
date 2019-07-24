var Coche = function (color,numPuertas,ruedas) {
  this.color = color
  _puertas = numPuertas
  this.ruedas = ruedas
  _turnOn = function() {
    console.log("VRUM")
  }
  // Getter _puertas
  this.returnPuertas = function(){
    return _puertas
  }

  // Setter _puertas
  this.changePuertas = function(number){
    _puertas = number
    _turnOn()
  }
}

let coche1 = new Coche('azul',3,4)
console.log(coche1.returnPuertas())
coche1.changePuertas(5)
console.log(coche1.returnPuertas())
//coche1.turnOn()