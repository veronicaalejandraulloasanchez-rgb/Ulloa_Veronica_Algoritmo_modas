// Lista de estilos (adaptación del algoritmo base)
let fashionStyles = [
    { name: "Minimalista", score: 0 },
    { name: "Streetwear", score: 0 },
    { name: "Vintage", score: 0 },
    { name: "Y2K", score: 0 },
    { name: "Formal Elegante", score: 0 },
    { name: "Boho", score: 0 },
    { name: "Athleisure", score: 0 }
];

let totalRounds = 0;
let maxRounds = 10;
let currentOptionA;
let currentOptionB;

// Función para seleccionar dos estilos aleatorios
function getRandomComparison() {

    let shuffled = fashionStyles.sort(() => 0.5 - Math.random());

    currentOptionA = shuffled[0];
    currentOptionB = shuffled[1];

    document.getElementById("optionA").innerText = currentOptionA.name;
    document.getElementById("optionB").innerText = currentOptionB.name;
}

// Función cuando el usuario vota
function vote(choice) {

    if (choice === "A") {
        currentOptionA.score++;
    } else {
        currentOptionB.score++;
    }

    totalRounds++;

    if (totalRounds >= maxRounds) {
        showRanking();
    } else {
        getRandomComparison();
    }
}

// Mostrar ranking final
function showRanking() {

    document.getElementById("comparison").style.display = "none";
    document.getElementById("results").style.display = "block";

    fashionStyles.sort((a, b) => b.score - a.score);

    let rankingList = document.getElementById("ranking");
    rankingList.innerHTML = "";

    fashionStyles.forEach(style => {
        let li = document.createElement("li");
        li.innerText = style.name + " - " + style.score + " votos";
        rankingList.appendChild(li);
    });
}

// Reiniciar algoritmo
function restart() {

    fashionStyles.forEach(style => style.score = 0);

    totalRounds = 0;

    document.getElementById("comparison").style.display = "block";
    document.getElementById("results").style.display = "none";

    getRandomComparison();
}

// Iniciar primera comparación
getRandomComparison();
// Lista de estilos (adaptación del algoritmo base)
let fashionStyles = [
    { name: "Minimalista", score: 0 },
    { name: "Streetwear", score: 0 },
    { name: "Vintage", score: 0 },
    { name: "Y2K", score: 0 },
    { name: "Formal Elegante", score: 0 },
    { name: "Boho", score: 0 },
    { name: "Athleisure", score: 0 }
];

let totalRounds = 0;
let maxRounds = 10;
let currentOptionA;
let currentOptionB;

// Función para seleccionar dos estilos aleatorios
function getRandomComparison() {

    let shuffled = fashionStyles.sort(() => 0.5 - Math.random());

    currentOptionA = shuffled[0];
    currentOptionB = shuffled[1];

    document.getElementById("optionA").innerText = currentOptionA.name;
    document.getElementById("optionB").innerText = currentOptionB.name;
}

// Función cuando el usuario vota
function vote(choice) {

    if (choice === "A") {
        currentOptionA.score++;
    } else {
        currentOptionB.score++;
    }

    totalRounds++;

    if (totalRounds >= maxRounds) {
        showRanking();
    } else {
        getRandomComparison();
    }
}

// Mostrar ranking final
function showRanking() {

    document.getElementById("comparison").style.display = "none";
    document.getElementById("results").style.display = "block";

    fashionStyles.sort((a, b) => b.score - a.score);

    let rankingList = document.getElementById("ranking");
    rankingList.innerHTML = "";

    fashionStyles.forEach(style => {
        let li = document.createElement("li");
        li.innerText = style.name + " - " + style.score + " votos";
        rankingList.appendChild(li);
    });
}

// Reiniciar algoritmo
function restart() {

    fashionStyles.forEach(style => style.score = 0);

    totalRounds = 0;

    document.getElementById("comparison").style.display = "block";
    document.getElementById("results").style.display = "none";

    getRandomComparison();
}

// Iniciar primera comparación
getRandomComparison();

