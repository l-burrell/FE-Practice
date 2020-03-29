
// DEAR DEVELOPERS, THIS CODE IS NOT FOR REUSE OR REDISTRIBUTION
// THANKS FOR VIEWING

var answer = selectSolution();
var redBtn = document.getElementById("btnHot");
var blueBtn = document.getElementById("btnCold");
var board = document.getElementById("board");
var total = document.getElementById("score");
var previousGuesses = [];
var gameOver = false;

function beginGame() {
    document.getElementById("title").innerHTML = "Let the game commence!";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("game").style.display = "block";
    // document.getElementById("title").innerHTML = answer; // debugging purposes only
}

function selectSolution() {
    var solution = Math.floor(Math.random() * 99) + 1;
    return solution;
}

function guessNumber() {
    var guess = document.getElementById("guessNum").value;
    if((guess > 100 || guess < 1) || previousGuesses.includes(guess) || gameOver) {  
        return ; //impossible
    }
    var guessHolder = document.createElement("p");
    var guessText = document.createTextNode(guess);
    guessHolder.appendChild(guessText);
    board.appendChild(guessHolder);
    previousGuesses.push(guess);

    var calc = Math.abs(guess-answer);
    if(calc === 0){
        guessHolder.className = "d0";
        total.innerHTML = "Total Tries: " + previousGuesses.length;
        document.getElementById("display").style.display = "none";
    } else if(calc <= 2){
        guessHolder.className = "d2";
    } else if(calc <= 5){
        guessHolder.className = "d5";
    } else if(calc <= 10) {
        guessHolder.className = "d10";
    } else if(calc > 10) {
        guessHolder.className = "d20";
    }
}