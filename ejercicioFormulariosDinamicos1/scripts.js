

function validarOption(valor){
    elementoDivDeclaracion = document.getElementById('idDivDeclaracion')
    if(valor == 'Yes')
        {
            console.log('Afirmativamente Sí')
            elementoDivDeclaracion.removeAttribute('hidden')
        } 
        else 
        {
            console.log('Negativamente No')
            elementoDivDeclaracion.setAttribute('hidden', '')
        }
}