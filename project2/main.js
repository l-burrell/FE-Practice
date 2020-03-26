


// DEAR DEVELOPERS, THIS CODE IS NOT FOR REUSE OR REDISTRIBUTION
// THANKS FOR VIEWING


var complete = false;
var current = 0;
var questionListing = [
    {question: "Who attack Red Riding Hood?", answer: "the wolf", list: ["grandma", "the three bears", "the three pigs", "the wolf"]}, 
    {question: "Who cut the Giants bean stock?", answer: "jack", list: ["jack", "pop-eye", "robin", "snow white"]}, 
    {question: "Who lured Hansel and Gretel?", answer: "the witch", list: ["the eagle", "the witch", "the wolf", "the watcher"]}, 
    {question: "What did Hansel and Gretel eat?", answer: "yes", list: ["oranges", "candy", "porridge", "lamb"]}, 
    {question: "How many dwarfs did Snow White Meet?", answer: "7", list: ["5", "7", "6", "8"]}, 
];

var questionBox = document.getElementById("question");
var solutionBox = document.getElementById("solution-list");
var solutionOption1 = document.createElement("p");
var solutionOption2 = document.createElement("p");
var solutionOption3 = document.createElement("p");
var solutionOption4 = document.createElement("p");

questionUser(0);

function questionUser(id){
    if(questionListing[id].list.length >= 2){
        questionBox.innerHTML = questionListing[id].question;
        var optionText1 = document.createTextNode(questionListing[id].list[0]);
        var optionText2 = document.createTextNode(questionListing[id].list[1]);
        solutionOption1.appendChild(optionText1);
        solutionOption2.appendChild(optionText2);
        solutionBox.appendChild(solutionOption1);
        solutionBox.appendChild(solutionOption2);
        
        // if(questionListing[id].list.length === 4){
            var optionText3 = document.createTextNode(questionListing[id].list[2]);
            var optionText4 = document.createTextNode(questionListing[id].list[3]);            
            solutionOption3.appendChild(optionText3);
            solutionOption4.appendChild(optionText4);
            solutionBox.appendChild(solutionOption3);
            solutionBox.appendChild(solutionOption4);
        // }
    }
}

function next(){
    current++;
    questionBox.innerHTML = " ";
    solutionOption1.innerHTML = " ";
    solutionOption2.innerHTML = " ";
    solutionOption3.innerHTML = " ";
    solutionOption4.innerHTML = " ";
    questionUser(current);
}