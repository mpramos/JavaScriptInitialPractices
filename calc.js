let operandoa;
let operandob;
let operacion;
function init() {
    let resultado = document.getElementById('resultado')
    let reset = document.getElementById('reset')
    let suma = document.getElementById('suma')
    let igual = document.getElementById('igual')
    let division=document.getElementById('division')
    let resta=document.getElementById('resta')
    let multiplicacion=document.getElementById('multiplicacion')

    let uno = document.getElementById("uno")
    let dos = document.getElementById("dos")
    let tres = document.getElementById(" tres")
    let cuatro = document.getElementById("cuatro")
    let cinco = document.getElementById("cinco")
    let seis = document.getElementById("seis")
    let siete = document.getElementById("siete")
    let ocho = document.getElementById("ocho")
    let nueve = document.getElementById("nueve")
    let cero = document.getElementById("cero")
}
uno.onclick = ()=>resultado.textContent += '1'
dos.onclick = ()=>resultado.textContent += '2'
tres.onclick = ()=>resultado.textContent += '3'
cuatro.onclick = () => resultado.textContent += '4'
cinco.onclick = () => resultado.textContent += '5'
seis.onclick = () => resultado.textContent += '6'
siete.onclick = () => resultado.textContent += '7'
ocho.onclick = () => resultado.textContent += '8'
nueve.onclick = () => resultado.textContent += '9'
cero.onclick = () => resultado.textContent += '0'
reset.onclick = function () {
    resetear()
}
function resetear() {
    resultado.textContent = ""
    operandoa = 0
    operandob = 0
    operacion = ""
}
suma.onclick = () => {
    operandoa = resultado.textContent;
    operacion = "+"
    limpiar()
}
resta.onclick = () => {
    operandoa = resultado.textContent;
    operacion = "-"
    limpiar()
}
multiplicacion.onclick = () => {
    operandoa = resultado.textContent;
    operacion = "*"
    limpiar()
}
division.onclick = () => {
    operandoa = resultado.textContent;
    operacion = "/"
    limpiar()
}

function limpiar() {
    resultado.textContent = ""
}
igual.onclick = function () {
    operandob = resultado.textContent;
    resolver()
}
function resolver() {
    let res = 0
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob)
            console.log(res);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob)
            console.log(res);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob)
            console.log(res);
            break;
        case "/":
            console.log(res);
            res = parseFloat(operandoa) / parseFloat(operandob)
            break;
    }
    resetear()
    resultado.textContent = res
}