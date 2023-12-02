const frutas = ["abacaxi", "banana", "caju"];

function mostrarFruta(valor,segundo, terceiro) {
    const li = document.createElement("li");
    li.textContent = valor;

    document.body.appendChild(li);
}

frutas.forEach(mostrarFruta);