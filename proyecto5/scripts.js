let seleccionado1 = false
let seleccionado2 = false
let seleccionado3 = false
let seleccionado4 = false


let peliculas = ['El Padrino', 'Toy Story', 'Titanic', 'Memento', 'Atrápame si puedes', 'American Pie']
function seleccionarGenero1()
{
    genero = 'comedia'
    seleccionado1 = !seleccionado1
    elementoGenero1 = document.getElementById('idGenero1')
    if (seleccionado1) {elementoGenero1.style='font-weight: bold; background-color: lightgray'} else {elementoGenero1.style='font-weight: normal; background-color: white'}
    console.log(elementoGenero1)
}

function seleccionarGenero2()
{
    genero = 'drama'
    seleccionado2 = !seleccionado2
    elementoGenero2 = document.getElementById('idGenero2')
    if (seleccionado2) {elementoGenero2.style='font-weight: bold; background-color: lightgray'} else {elementoGenero2.style='font-weight: normal; background-color: white'}
    console.log(elementoGenero2)
}

function seleccionarGenero3()
{
    genero = 'musical'
    seleccionado3 = !seleccionado3
    elementoGenero3 = document.getElementById('idGenero3')
    if (seleccionado3) {elementoGenero3.style='font-weight: bold; background-color: lightgray'} else {elementoGenero3.style='font-weight: normal; background-color: white'}
    console.log(elementoGenero3)
}

function seleccionarGenero4()
{
    genero = 'crimen'
    seleccionado4 = !seleccionado4
    elementoGenero4 = document.getElementById('idGenero4')
    if (seleccionado4) {elementoGenero4.style='font-weight: bold; background-color: lightgray'} else {elementoGenero4.style='font-weight: normal; background-color: white'}
    console.log(elementoGenero4)
}

function mostrarPeli(){
    let edad = document.getElementById('idEdadUsuario').value
    let mayorDeEdad = edad >= 16
    let medianaEdad = edad >= 13 && edad < 16
    let menorDeEdad = edad < 13



    let resultadoPelicula = document.getElementById('idResultadoPelicula')
    switch(true)
    {
        case seleccionado1 && menorDeEdad:
            resultadoPelicula.textContent = peliculas[1]
            break



        case seleccionado4 && mayorDeEdad:
            resultadoPelicula.textContent = peliculas[0]
            break


        case seleccionado2 && medianaEdad:
            resultadoPelicula.textContent = peliculas[2]
            break


        case seleccionado1 && mayorDeEdad:
            resultadoPelicula.textContent = peliculas[5]
            break


        case seleccionado2 && medianaEdad:
            resultadoPelicula.textContent = peliculas[4]
            break

        case seleccionado4 && medianaEdad:
            resultadoPelicula.textContent = peliculas[3]
            break

        default:
            resultadoPelicula.textContent = 'Sin resultados'
    }
}