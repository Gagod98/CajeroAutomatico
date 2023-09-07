
const input = document.querySelector ('#deposito')
const botonDeposito = document.querySelector ('#botonDeposito')
const cuentaDinero = document.querySelector ('#cuentaDinero')

// Agrega el saldo con el boton***
botonDeposito.addEventListener('click', function(e) {
    const deposito = input.value
    console.log ({deposito})
    const valorDeposito = +deposito
    const saldo = cuentas.saldo
    const agregarSaldo = (saldo + valorDeposito)
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
    //cuentas.saldo = Number(saldoActual)
    //saldoInsuficiente.innerHTML = saldoActual
    
   })



   function final() {
    setTimeout (() => {
        window.location = "login.html"
    }, 5000)
}