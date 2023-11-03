window.onload = () => {
    img = document.getElementById("img");
    alphabet = document.querySelectorAll("#alphabet button");
    reset = document.getElementById("reset");
    word = document.getElementById("word");

    newGame();

    alphabet.forEach(element => {
        element.addEventListener('click', checkLetter);
    });

    reset.addEventListener('click', newGame);
}

// Array with solutions
var words = [
    "ELEFANTE",
    "COMPUTADORA",
    "PROGRAMACION",
    "JAVASCRIPT",
    "TECLADO",
    "GUITARRA",
    "UNIVERSIDAD",
    "ESTUDIANTE",
    "TELEFONO",
    "PLANTA",
    "EDIFICIO",
    "MONTAÑA",
    "OCÉANO",
    "AVIÓN",
    "PERRO",
    "GATO",
    "CASA",
    "JIRAFA",
    "TELEVISION",
    "PELOTA"
];

var img;
var word;
var solution;
var solutionVisible;
var lives;


// Starts the game
function newGame(){
    solution = words[Math.floor(Math.random()*words.length)];
    solutionVisible = ""
    setSolutionVisible();
    printWord();
    lives = 1;
    img.src = "img/1.png";

    alphabet.forEach(element => {
        element.disabled = false;
    });
}

// Print Low Bars depending the length of the solution
function setSolutionVisible(){
    for(let i=0; i<solution.length; i++){
        solutionVisible += "_";
    }
}

// Check the letter if it´s contained in the word, and if it´s true it would print in the world, otherwise it would call "wrongLetter"
function checkLetter(e){
    if(solution.includes(e.target.innerHTML)){
        showLetter(e.target.innerHTML);
        e.target.disabled = true;
        printWord();
    } else {
        if(lives == 9){
            endGame();
        } else{
            wrongLetter(e.target);
        }
    }
    
}

// Print the word with the update changes
function printWord(){
    word.innerHTML = solutionVisible;
}

// Change the letters that are correct
function showLetter(letter){
    let solutionVisibleSplit = solutionVisible.split('');
    
    for(let i=0; i<solution.length; i++){
        if(letter == solution[i]){
            solutionVisibleSplit[i] = letter;
        }
    }

    solutionVisible = solutionVisibleSplit.join('');
}

// Cross and disable the letter when is wrong, and update the image
function wrongLetter(letter){
    lives++;
    img.src = "img/" + lives + ".png";

    letter.disabled = true;
}

function endGame(){
    alphabet.forEach(element => {
        element.disabled = true;
    });
}