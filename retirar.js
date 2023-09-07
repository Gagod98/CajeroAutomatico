const input = document.querySelector ('#deposito')
const botonRetirar = document.querySelector ('#botonRetirar')
const cuentaDinero = document.querySelector ('#cuentaDinero')
const saldoInsuficiente = document.querySelector ('#botonError')


// Quita saldo con el boton***
botonRetirar.addEventListener('click', function(e) {
    const deposito = input.value
    const valorDeposito = +deposito
    const saldo = cuentas.saldo
    // No deja que el saldo baje de cero y ademas agrega una alerta***
    if ((valorDeposito > saldo)){ 
        saldoInsuficiente.classList.remove('esconderNotificacion')
        saldoInsuficiente.innerHTML = "Saldo insuficiente"
        return
    } 
    const agregarSaldo = (saldo - valorDeposito)
    cuentaDinero.innerText = agregarSaldo
    cuentas.saldo = agregarSaldo 
    localStorage.setItem('saldo', agregarSaldo)
    final()
})


addEventListener('DOMContentLoaded', function(){
    const cuentasDeUsuario = localStorage.getItem ('cuentasDeUsuario')
    const cuentaParse = JSON.parse(cuentasDeUsuario)
    cuentas = cuentaParse
    //Guarda todo en local
    //const saldoActual = localStorage.getItem ('saldo')***
    //cuentas.saldo = Number(saldoActual)***
    //saldoInsuficiente.innerHTML = saldoActual***
    
   })

    function final() {
    setTimeout (() => {
        window.location = "login.html"
    }, 5000)
}