console.log('Contador');

let contador = 0;

const counterDiv = document.getElementById("counter");
const Aumentar = document.getElementById("aumentar")
const Disminuir = document.getElementById("disminuir")

function actualizarContador(){
    counterDiv.textContent = contador;
}

Aumentar.addEventListener("click", () => {
    contador++
    actualizarContador()
})

Disminuir.addEventListener("click", () => {
    contador--
    actualizarContador()
})

actualizarContador()