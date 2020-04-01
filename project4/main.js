

// DEAR DEVELOPERS, THIS CODE IS NOT FOR REUSE OR REDISTRIBUTION
// THANKS FOR VIEWING

//digits
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

//controls
var btnDecimal = document.getElementById("btnDecimal");
var btnPlus = document.getElementById("btnPlus");
var btnMinus = document.getElementById("btnMinus");
var btnMultiply = document.getElementById("btnMultiply");
var btnDivide = document.getElementById("btnDivide");
var btnEnter = document.getElementById("btnEnter");

//display screen
var display = document.getElementById("data");

//other data
var hold = [];
var foundSolution = false;

init();

function init(){
    display.disabled = true;
    display.value = "";
}

function putValue(t){
    var data = t.innerHTML;
    if(foundSolution === true){
        display.value = "";
        foundSolution = false;
    }
    if(data === "+" || data === "-" || data === "/" || data === "*"){
        // display.value += " " + data + " ";
        var newVal = hold[0]+hold[1];
       hold.splice(0, 2, newVal);
    } else {
        display.value += data;
    }
    hold.push(data);
}

function beginCalculating() {
    console.log(hold);
    var result = "Feature in progress...";
    display.value = "" + result;
    foundSolution = true;
}