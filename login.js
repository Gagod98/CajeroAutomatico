const usuario = document.querySelector('#usuario')
const contraseña = document.querySelector('#contraseña')
const botonIngreso = document.querySelector('#botonIngreso')
const botonError = document.querySelector ('#botonError')
const cuentasDeUsuario = [
    {
    saldo : 200,
    nombre :"Mali",
    id:"001",
    cuenta:"Mali",
    contraseña: "1234"
    },
    {
        saldo : 290,
        nombre :"Gera",
        id: "001",
        cuenta:"Gera",
        contraseña:"1234"
        },
        {
            saldo : 26,
            nombre : "Maui",
            id: "001",
            cuenta: "Maui",
            contraseña: "1234"
            }
]


botonIngreso.addEventListener('click', function (){

    const ingresoUsuario = usuario.value
    const contraseñaActual = contraseña.value

    for(const cuenta of cuentasDeUsuario ) {
        if (cuenta.cuenta === ingresoUsuario && cuenta.contraseña === contraseñaActual) {

            localStorage.setItem('cuentasDeUsuario', JSON.stringify(cuenta))
            window.location = 'cajero.html'
            return 
        } else if (cuenta.cuenta !== ingresoUsuario || cuenta.contraseña !== contraseñaActual) {
                botonError.classList.remove('esconderNotificacion')
                botonError.innerHTML = "Credenciales Invalidas"
                cerrarNotificacion()
        }
                
            
        }
    }
)


function cerrarNotificacion() {
    setTimeout (() => {
        botonError.classList.add('esconderNotificacion')
    }, 3000)
}