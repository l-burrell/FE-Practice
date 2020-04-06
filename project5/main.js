

var card = document.getElementById("card");
var cardTitle = document.getElementById('card-title');
var cardDes = document.getElementById('card-description');
var cardImg = document.getElementById("card-image");

var selected = 0;
var isRunning = false;
var isFlipped = false;

var data = [
    {title: "Dog", desc: "I am mans best friend! I have four legs, and come in a variety of colors! I can have floppy or pointy ears! And have a long or stubby tail.", img: "img/dog.jpg"},
    {title: "Cat", desc: "I am a indepedent rodent hunter! I have sharp fangs, pointy ears, and typically have a long tail. I have beautiful fur, and clean myself often! At times I will throw up a hair ball, and deliver my kills to your doorstep.", img: "img/cat.jpg"},
    {title: "Hamster", desc: "I am a small rodent that is kept as a pet, though im not a rat! I am furry, small, and like to run in a wheel. I come in many colors, and my kind was featured in Hamtaro!", img: "img/hamster.jpg"},
    {title: "Turtle", desc: "I have a large shell that protects my body! I am typically green and have a small tail. I have four legs, can typically swim, and sometimes can live past 100 years!", img: ""},
    {title: "Bunny", desc: "I am a furry pet that loves to eat carrots! I typically rely on fresh vegetables for my diet, and have tiny black poops! I have very long eats, and come in a variety of colors.", img: ""},
    // {title: "", desc: "", img: ""},
];

var used = [];

function change() {
    select();
    cardTitle.innerHTML = data[selected].title;
    cardDes.innerHTML = data[selected].desc;
    cardImg.src = data[selected].img;
}

function select(){
    var pick = Math.floor(Math.random() * data.length);
    if(pick === selected){
        pick = Math.floor(Math.random() * data.length);
    }
    // THIS CREATES AN INFINITE LOOP - NOT GOOD - FIX LATER
    // while(used.includes(pick) && data.length-1 != used.length){
    //     pick = Math.floor(Math.random() * data.length);
    //     console.log(pick);
    // }
    selected = pick;
    // used.push(pick);
}

function turn() {
        
        if(isFlipped){
            change();
            isFlipped = false;
        } else {
            change();
            isFlipped = true;
        }
}
