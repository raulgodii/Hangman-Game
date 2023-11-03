window.onload = () => {
    img = document.getElementById("img");
    alphabet = document.querySelectorAll("#alphabet button");
    reset = document.getElementById("reset");

    newGame();

    alphabet.forEach(element => {
        element.addEventListener('click', checkLetter);
    });

    reset.addEventListener('click', newGame);
}

// Array with solutions
var words = [
    "elefante",
    "computadora",
    "programacion",
    "javascript",
    "teclado",
    "guitarra",
    "universidad",
    "estudiante",
    "telefono",
    "planta",
    "edificio",
    "montaña",
    "océano",
    "avión",
    "perro",
    "gato",
    "casa",
    "jirafa",
    "television",
    "pelota"
];

var word = document.getElementById("word");
var solution = "";
var solutionVisible = "";

// Starts the game
function newGame(){
    solution = words[Math.floor(Math.random()*words.length)];
    setSolutionVisible();
}

// Print Low Bars depending the length of the solution
function setSolutionVisible(){
    for(let i=0; i<solution.length; i++){
        solutionVisible += "_ ";
    }
}

// Check the letter if it´s contained in the word, and if it´s true it would print in the world, otherwise it would call "wrongLetter"
function checkLetter(e){
    printWord();
}

function printWord(){
    word.innerHTML = solutionVisible;
}

// Cross and disable the letter when is wrong, and update the image
function wrongLetter(){

}