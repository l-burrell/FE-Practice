



var quiz_title = document.getElementById("quiz-title");
var quiz_content = document.getElementById("quiz-content");
var quiz = document.getElementById("quiz");
var p = document.createElement("p");
var text = document.createTextNode("testing data");
p.appendChild(text);
quiz.appendChild(p);

var questions = [{
    question: "What color is the moon?", answer: "white", choices: ["purple","white","corn puff", "green"],
    question: "What do we water the grass with?", answer: "water", choices: ["dog pee", "bleach", "water", "paint thinner"],
    question: "Can bears be black?", answer: "yes", choices: ["yes", "no"],
    question: "Who attack little red riding hood?", answer: "the big bad wolf", choices: ["donald duck", "batman", "tony the tiger", "the big bad wolf"], 
    question: "I'm pop-eye the ____ man!", answer: "sailor", choices: ["sailor", "mailman", "bionic", "swords"],
    question: "Who ate Hansel and Gredel?", answer: "witch", choices: ["pop-eye", "donald duck", "witch", "big foot"],
    question: "What made Hansel and Gredel fat?", answer: "candy", choices: ["candy", "ice cream", "bread", "no exercise"],
    question: "Who had magic beans?", answer: "jack", choices: ["jack", "robin hood", "woody", "buzz lightyear"],
}];

displayQuestion();

function displayQuestion(){
    quiz_title.innerHTML = questions[0].question;
    for(i = 0; i < questions.length;)
    quiz_title.innerHTML = questions[0].question;
}
