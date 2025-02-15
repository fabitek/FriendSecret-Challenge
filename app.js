
//array de amigos
let amigos = [];

// funcion que agrega el nombre del amigo en un array
function agregarAmigo() {
    let friend = document.getElementById('amigo').value;
    // saber que tipo de valor ingreso el usuario
    // console.log(typeof friend);

    // Implementando una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (friend === '' || !isNaN(friend)) {
        alert('Por favor, inserte un nombre.');
        return;
    } else {
        console.log(`Nombre válido: ${friend}`);
    }
    //Si el valor es válido, se añade al array de amigos
    amigos.push(friend);
    // console.log(amigos);

    // limpiar el campo de texto despues de añadir un amigo
    limpiarInput();

    // mostrar los amigos en la lista
    for (let i = 0; i < amigos.length; i++) {
        // console.log(amigos[i]);
        let listaAmigos = document.querySelector('#listaAmigos');
        listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    }
}
// limpiar el campo de texto despues de añadir un amigo
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}
// funcion que sortea todos los amigos de la lista
function sortearAmigo() {
    // si el array esta vacio, mostrar un mensaje de alerta
    if (amigos.length === 0) {
        alert('No hay amigos en la lista');
        return;
    } else {
        // si el array tiene amigos, se sortea un amigo
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        console.log(`amigo sorteado: ${amigoSorteado}`);
        document.querySelector('#listaAmigos').innerHTML = (`El amigo sorteado es: ${amigoSorteado}`);
    }
}