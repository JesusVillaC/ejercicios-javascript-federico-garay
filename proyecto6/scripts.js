const notas = [7, 9, 2, 4, 6]

function mostrarListaNotas(){
    elementoDLista = document.getElementById('idLista')
    for (n of notas){
        let elementoPLista = document.createElement('p')
        elementoPLista.innerText = n
        elementoDLista.appendChild(elementoPLista)
    }
}

function calcularPromedio(){
    let elementoPromedio = document.getElementById('idPromedio')

    let total = 0
    for (n of notas){
        total = total + n
    }
    let promedio = (total/notas.length)
    
    elementoPromedio.value = promedio
}

function obtenerNotaTop(){
    let elementoNotaTop = document.getElementById('idNotaTop')

    let notaTop = 0
    for(n of notas){
        if(n > notaTop){
            notaTop = n
        } else {
            continue
        }
    }
    console.log(notaTop)
    elementoNotaTop.value = notaTop
}

function detectarSuspenso(){
    let suspenso = 'No'
    for (n of notas){
        if (n > 4){
            continue
        } else{
            suspenso = 'Si'
            break
        }
    }
    document.getElementById('idSuspensoCheck').value = suspenso
}