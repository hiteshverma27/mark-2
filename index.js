var readlineSync = require('readline-sync');
var score = 0;
var questions = [{
  question: "What is F1? ",
  answer: "race"
},
{
  question: "What was the last time F1 came to India?" ,
  answer: "2013"
},
{
  question: "Which team has participated in every F1 season so far? ",
  answer: "Ferrari"
},
{
  question: "Which energy drink maker has also got a F1 team? ",
  answer: "redbull"
},
{
  question: "Which team is the defending champion of 2021? ",
  answer: "mercedes"
}]

function welcomeUser(){
  var userName = readlineSync.question("What is your name?");
  console.log(`Hello ${userName}!! Welcome to the quiz for Mark 2!! Lets get started!`)
}
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("You are right!");
    score = score +1;
  }
  else{
    console.log("You are wrong!");
  }
  console.log(`Your current score is ${score}`);
  console.log("-----")
}
function game(){
  for (var i=0; i < questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function currentScore(){
  console.log(`Your final score is ${score}! Thank you for playing and you are awesome!`);
}

welcomeUser();
game();
currentScore();

