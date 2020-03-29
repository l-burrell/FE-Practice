var answer = selectSolution();
var redBtn = document.getElementById("btnHot");
var blueBtn = document.getElementById("btnCold");
var board = document.getElementById("board");

function beginGame() {
    document.getElementById("title").innerHTML = "Let the game commence!";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function selectSolution() {
    var solution = Math.floor(Math.random() * 99) + 1;
    return solution;
}

function guessNumber() {
    var guess = document.getElementById("guessNum").value;
        if(guess > 100 || guess < 1) {
            //impossible
            return ;
        }
    var guessHolder = document.createElement("p");
    var guessText = document.createTextNode(guess);
    guessHolder.appendChild(guessText);
    board.appendChild(guessHolder);


    if(guess < answer - 50){

    }

}