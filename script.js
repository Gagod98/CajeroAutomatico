

const input = document.querySelector ('#deposito')
const botonDeposito = document.querySelector ('#botonDeposito')
const botonRetiro = document.querySelector ('#botonRetiro')
const botonConsulta = document.querySelector ('#botonConsulta')
const dineroEnCuenta = document.querySelector ('#cuentaDinero')
const saldoInsuficiente = document.querySelector ('#botonError')
const escondido = document.querySelector ('#botonError span')
const saludo = document.querySelector ('#saludo')
const botonSalir = document.querySelector ('#salir')

let cuentas = null

// Agrega el saldo con el boton***
botonDeposito.addEventListener('click', function(e) {
        const deposito = input.value
        console.log ({deposito})
        const valorDeposito = +deposito
        const saldo = cuentas.saldo
        const agregarSaldo = (saldo + valorDeposito)
        dineroEnCuenta.innerText = agregarSaldo
        cuentas.saldo = agregarSaldo
        localStorage.setItem('saldo', agregarSaldo)
})
// Quita saldo con el boton***
botonRetiro.addEventListener('click', function(e) {
    const deposito = input.value
    const valorDeposito = +deposito
    const saldo = cuentas.saldo
    // No deja que el saldo baje de cero y ademas agrega una alerta***
    if ((valorDeposito > saldo)){ 
        saldoInsuficiente.classList.remove('esconderNotificacion')
        saldoInsuficiente.innerHTML = "Saldo insuficiente"
        cerrarNotificacion()
        return
    } 
    const agregarSaldo = (saldo - valorDeposito)
    dineroEnCuenta.innerText = agregarSaldo
    cuentas.saldo = agregarSaldo 
    localStorage.setItem('saldo', agregarSaldo)
})

botonConsulta.addEventListener('click', function(e) {
    const deposito = input.value
    console.log ({deposito})
    const valorDeposito = Number(deposito)
    const saldo = cuentas.saldo
    const agregarSaldo = saldo 
    dineroEnCuenta.innerText = agregarSaldo
    cuentas.saldo = agregarSaldo
})


function cerrarNotificacion() {
    setTimeout (() => {
        saldoInsuficiente.classList.add('esconderNotificacion')
    }, 3000)
}

   // Sirve para cargar todo el DOM se carga TODO***

   addEventListener('DOMContentLoaded', function(){
    const cuentasDeUsuario = localStorage.getItem ('cuentasDeUsuario')
    const cuentaParse = JSON.parse(cuentasDeUsuario)
    cuentas = cuentaParse
    saludo.innerHTML = "<h1>" + "Bienvenido/a " + cuentaParse.nombre + "</h1>"
    cuentas.saldo = Number(saldoActual)
    saldoInsuficiente.innerHTML = saldoActual
    
   })

   botonSalir.addEventListener('click', function() {
   localStorage.clear()
   window.location = "index.html"
})