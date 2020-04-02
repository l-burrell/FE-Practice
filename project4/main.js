

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
var calc = 0;
var solution = 0;
var clear = false;
init();

function init(){
    display.disabled = true;
    display.value = "";
}

function putValue(t){
    //ISSUE IN THIS METHOD
    var data = t.innerHTML;
    calc = parseInt(display.value);
    if(clear){
        display.value = "";
        clear = false;
    }

    //FIX THIS, DOESN'T FUNCTION CORRECTLY!!! May need to redo entire method.
    //describe issue:
    /** Unfortunately to submit the final input clicked, we must once again click a control
     * button. this is not ideal. We want to be able to instead click 
     * on the enter key, and have that input the final submission.
     * Then return the value to the display.
     */
    if(data === '+'){
        hold.push(calc);
        display.value = "";
        solution = hold[0] + hold[1];
    } else {
        display.value += data;
    }


    if(hold.length > 1){
        hold.splice(0, 2, solution);
        clear = true;
    }
}

function beginCalculating() {
    console.log("HOLD VALUE: " + hold);
    display.value = solution;
}