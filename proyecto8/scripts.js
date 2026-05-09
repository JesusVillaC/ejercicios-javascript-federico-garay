let empleados = []
// let empleado

function Empleado(numero, nombre, apellido, año, cargo){
    this.numero = numero
    this.nombre = nombre
    this.apellido = apellido
    this.año = año
    this.cargo = cargo
}

function cargarEmpleado(){
    let numero = document.getElementById('idIdentificacion').value
    let nombre = document.getElementById('idNombre').value
    let apellido = document.getElementById('idApellido').value
    let año = document.getElementById('idAño').value
    let cargo = document.getElementById('idCargo').value
    
    let empleado = new Empleado(numero, nombre, apellido, año, cargo)
    //empleado.info = `Número: ${numero}. Nombre: ${nombre}. Apellido: ${apellido}. Año: ${año}. Cargo: ${cargo}.`
        
    empleados.push(empleado)
}

function mostrarEmpleados(){
    let mensaje = ''
    for (let empleado of empleados){
        for (propiedad in empleado){
            mensaje = mensaje + propiedad + ': ' + empleado[propiedad] + '. '
        }
        mensaje = mensaje + '\n'
    }
    alert(mensaje)
}