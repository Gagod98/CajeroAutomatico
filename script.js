

const input = document.querySelector ('#deposito')
const botonDeposito = document.querySelector ('#botonDeposito')
const botonRetiro = document.querySelector ('#botonRetiro')
const botonConsulta = document.querySelector ('#botonConsulta')
const dineroEnCuenta = document.querySelector ('#cuentaDinero')
const saldoInsuficiente = document.querySelector ('#botonError')
const escondido = document.querySelector ('#botonError span')

const cuentas = {
    saldo : 100,
    nombre : "Malinali",
    id: "001",
    cuenta: "Malinali",
    contraseña: "1234"
}
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
    const valorDeposito = +deposito
    const saldo = cuentas.saldo
    const agregarSaldo = (saldo + valorDeposito)
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

    const saldoActual = localStorage.getItem ('saldo')
    cuentas.saldo = +saldoActual
    saldoInsuficiente.innerHTML = saldoActual
   })
