// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []

function actualizarListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo =>{
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });//recorre el array de amigos y crea un li para cada uno
} 


function agregarAmigo(){
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === ''){
        alert('El campo se encuentra vacio');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarListaAmigos();
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('La lista se encuentra vacia, no tienes amigos');
        return;
        
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSorteado}</li>`
}