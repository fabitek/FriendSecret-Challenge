// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array de amigos
let amigos = [];

// funcion que agrega el nombre del amigo en un array
function agregarAmigo(){
    let friend = document.getElementById('amigo').value;

    // saber que tipo de valor ingreso el usuario
    console.log(typeof friend);

    // no permitir que el usuario ingrese un valor vacio o valor numerico
    if(friend === '' || !isNaN(friend)){
        alert('Ingrese un nombre valido');
        return;
    }   
    // si el usuario ingresa un nombre valido, se añade al array
    amigos.push(friend);
    console.log(amigos);
    // limpiar el campo de texto despues de añadir un amigo
    limpiarInput();
}
// limpiar el campo de texto despues de añadir un amigo
function limpiarInput(){
    document.querySelector('#amigo').value = '';
}

// funcion que muestra los amigos en la lista