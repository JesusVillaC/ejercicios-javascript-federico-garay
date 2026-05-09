function mostrarResultado(resultado){
    document.getElementById('idResultado').value = resultado
}

function sumar(){
    let num1 = Number(document.getElementById('idNum1').value)
    let num2 = Number(document.getElementById('idNum2').value)
    mostrarResultado(num1 + num2)
}

function restar(){
    let num1 = Number(document.getElementById('idNum1').value)
    let num2 = Number(document.getElementById('idNum2').value)
    mostrarResultado(num1 - num2)
}

function multiplicar(){
    let num1 = Number(document.getElementById('idNum1').value)
    let num2 = Number(document.getElementById('idNum2').value)
    mostrarResultado(num1 * num2)
}

function dividir(){
    let num1 = Number(document.getElementById('idNum1').value)
    let num2 = Number(document.getElementById('idNum2').value)
    mostrarResultado(num1 / num2)
}

function hacerPotencia(){
    let num1 = Number(document.getElementById('idNum1').value)
    let num2 = Number(document.getElementById('idNum2').value)
    mostrarResultado(Math.pow(num1, num2))
}

function hacerRaiz(){
    let num1 = Number(document.getElementById('idNum1').value)
    mostrarResultado(Math.sqrt(num1))
}

function hacerAbsoluto(){
    let num1 = Number(document.getElementById('idNum1').value)
    mostrarResultado(Math.abs(num1))
}

function hacerAleatorio(){
    let num1 = Number(document.getElementById('idNum1').value)
    let num2 = Number(document.getElementById('idNum2').value)
    mostrarResultado(Math.floor((Math.random() * ((num2)-num1)) + num1))
}

function hacerRound(){
    let num1 = Number(document.getElementById('idNum1').value)
    mostrarResultado(Math.round(num1))
}

function hacerFloor(){
    let num1 = Number(document.getElementById('idNum1').value)
    mostrarResultado(Math.floor(num1))
}

function hacerCeil(){
    let num1 = Number(document.getElementById('idNum1').value)
    mostrarResultado(Math.ceil(num1))
}