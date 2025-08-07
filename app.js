// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];

function agregarAmigo(){
    let amigoInput = document.getElementById("amigo");
    let amigo = amigoInput.value;
    if (amigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
    if (buscarAmigo(amigo)) {
        alert("El nombre ya existe en la lista");
        return;
    }
    listaAmigos.push(amigo);
    amigoInput.value = "";
    actualizarLista();
}
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo(){
    if (listaAmigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer un sorteo");
        return;
    }
    let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").textContent = "El Amigo Secreto Sorteado es: " + ganador;

    // nuevo feat para el siguiente sorteo
    // Eliminar al ganador de la lista para el próximo sorteo
    listaAmigos.splice(listaAmigos.indexOf(ganador), 1); 
    actualizarLista();
}
//nueva function para evitar que se escriba un nombre repetido
function buscarAmigo(nombre) {
    return listaAmigos.includes(nombre);
}
