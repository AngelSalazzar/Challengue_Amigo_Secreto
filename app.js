// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []

function actualizarListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo =>{
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
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

