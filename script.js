

const input = document.querySelector ('#deposito')
const botonDeposito = document.querySelector ('#botonDeposito')
const botonRetiro = document.querySelector ('#botonRetiro')
const botonConsulta = document.querySelector ('#botonConsulta')
const dineroEnCuenta = document.querySelector ('#cuentaDinero')
const saldoInsuficiente = document.querySelector ('#botonError')
const escondido = document.querySelector ('#botonError span')
const saludo = document.querySelector ('#saludo')
const botonSalir = document.querySelector ('#salir')
const botonDepositar = document.querySelector ('#botonDepositar')
const botonRetirar = document.querySelector ('#botonRetirar')

let cuentas = null

botonSalir.addEventListener('click', function() {
    localStorage.clear()
    window.location = "login.html"
    
 })

botonDepositar.addEventListener('click', function() {
    window.location = "deposito.html"
})

botonRetirar.addEventListener('click', function() {
    window.location = "retirar.html"
})

   // Sirve para cargar todo el DOM se carga TODO***

   addEventListener('DOMContentLoaded', function(){
    const cuentasDeUsuario = localStorage.getItem ('cuentasDeUsuario')
    const cuentaParse = JSON.parse(cuentasDeUsuario)
    cuentas = cuentaParse
    saludo.innerHTML = "<h1>" + "Bienvenido/a " + cuentaParse.nombre + "</h1>"
    cuentas.saldo = Number(saldoActual)
    saldoInsuficiente.innerHTML = saldoActual
    
   })

