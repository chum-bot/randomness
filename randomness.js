const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

function randomNumber(){
    randNum = Math.floor(Math.random()*21);
    console.log(randNum);
}
function randomLetter(){
    randLet = alphabet.substr(Math.random()*26, 1)
    console.log(randLet);
}
function randomFood(){
    console.log(foods[Math.random()*foods.length]);
}
function randomStudent(){
    
    console.log(students[Math.random()*students.length]);
}
function randomGroup(){
    for(let i = 0; i < 2; i++){
        randomStudent();
    }
}

randomNumber();
randomLetter();
randomFood();
randomStudent();
randomGroup();