const prendas = [
{ nombre: "Vestido Oversize", puntuacion: 0 },
{ nombre: "Blazer Minimalista", puntuacion: 0 },
{ nombre: "Outfit Y2K", puntuacion: 0 },
{ nombre: "Streetwear Urbano", puntuacion: 0 },
{ nombre: "Moda Sostenible", puntuacion: 0 },
{ nombre: "Estilo Coquette", puntuacion: 0 },
{ nombre: "Total Black Elegante", puntuacion: 0 },
{ nombre: "Athleisure", puntuacion: 0 }
];

let indiceA, indiceB;

function getRandomIndices() {
indiceA = Math.floor(Math.random() * prendas.length);
do {
indiceB = Math.floor(Math.random() * prendas.length);
} while (indiceA === indiceB);
}

function mostrarOpciones() {
getRandomIndices();
document.getElementById("optionA").innerText = prendas[indiceA].nombre;
document.getElementById("optionB").innerText = prendas[indiceB].nombre;
}

function selectOption(opcion) {
if (opcion === 0) {
prendas[indiceA].puntuacion++;
} else {
prendas[indiceB].puntuacion++;
}

```
actualizarRanking();
mostrarOpciones();
```

}

function actualizarRanking() {
const ranking = [...prendas].sort((a, b) => b.puntuacion - a.puntuacion);
const rankingList = document.getElementById("ranking");
rankingList.innerHTML = "";

```
ranking.forEach((prenda, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${prenda.nombre} - ${prenda.puntuacion} puntos`;
    rankingList.appendChild(li);
});
```

}

mostrarOpciones();
