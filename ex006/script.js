var peso = Number(prompt("digite seu peso: "))
var altura = Number(prompt("digite sua altura: "))

var imc = peso / Math.pow(altura, 2)



if(imc < 18.5) {
    alert(`IMC ${imc} - Abaixo do peso`)
}else if(imc >= 18.5 && imc <= 24.9) {
    alert(`IMC ${imc} - peso normal`)
}else if(imc <=  imc <= 29.9) {
    alert(`IMC ${imc} - sobrepeso`)
}else {
    alert(`IMC ${imc} - obesidade`)
}