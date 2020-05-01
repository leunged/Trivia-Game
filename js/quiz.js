/*
Name: Edmund Leung
ID: 991531421
Assignment #1: Trivia Game
Date Created: January 29, 2019
Date Modified: January 31, 2019
Description: A trivia game that asks the user questions. 
*/

// Initializaing variables 
var questionElement = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var next = document.getElementById("next");
var result = document.getElementById("result");
var questionIndex = 0;
var score = 0;


// Multidimensional array of questions and answers
var questions = [
{
    "question": "What day is Canada Day?", 
    "choice1": "July 1st", 
    "choice2": "July 4th", 
    "choice3": "July 7th", 
    "choice4": "July 10th", 
    "answer": "1"
},  {
    "question": "The capital city of Canada is:", 
    "choice1": "Montreal", 
    "choice2": "Ottawa", 
    "choice3": "Toronto", 
    "choice4": "Vancouver", 
    "answer": "2"
},  {
    "question": "How many provinces does Canada have?", 
    "choice1": "5", 
    "choice2": "10", 
    "choice3": "15", 
    "choice4": "20", 
    "answer": "2"
},  {
    "question": "The leader of Canada is known as the:", 
    "choice1": "president", 
    "choice2": "premier", 
    "choice3": "prime minister", 
    "choice4": "emperor", 
    "answer": "3"
},  {
    "question": "The first inhabitants of Canada were the:", 
    "choice1": "Vikings", 
    "choice2": "Native people", 
    "choice3": "French", 
    "choice4": "English", 
    "answer": "2"
},  {
    "question": "The third most commonly spoken language in Canada is:", 
    "choice1": "Chinese", 
    "choice2": "Inuktitut", 
    "choice3": "Italian", 
    "choice4": "Punjabi", 
    "answer": "1"
}, {
    "question": "Canada became a country in the year:", 
    "choice1": "1467", 
    "choice2": "1667", 
    "choice3": "1863", 
    "choice4": "1867", 
    "answer": "4"
}];

// Function to display the first question
function getQuestion(index) {
    var q = questions[index];
    questionElement.innerHTML = q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
};

// Function to display the next question
function nextQuestion() {

    // Checks if the user inputs a valid answer
    var selectChoice = document.querySelector("input[type=radio]:checked");
    if (!selectChoice) {
        alert("Choose an answer.");
    }

    // Compares the value of the selected choice to the answer
    // Add one to score if its true
    var answer = selectChoice.value;
    if (questions[questionIndex].answer == answer) {
        score++;
    }

    // Changes the next question button text to submit 
    selectChoice.checked = false;
    questionIndex++;
    if (questionIndex == questions.length - 1) {
        next.innerHTML = "Submit";
    }

    // Displays the results of the game
    if (questionIndex == questions.length) {
        document.getElementById("container").style.display = "none";
        document.getElementById("container2").style.display = "none";
        result.style.display = "";
        result.innerHTML = "You scored " + score + " out of " + questions.length;
    }
    getQuestion(questionIndex);
}

getQuestion(questionIndex);

// Function to display the instructions of the game 
function help() {
    document.getElementById("container").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "block";
}

// Function to return to the game
function back() {
    document.getElementById("container").style.display = "block";
    document.getElementById("container2").style.display = "block";
    document.getElementById("container3").style.display = "block";
    document.getElementById("container4").style.display = "none";
}

// Function to restart the game
function restart() {
    window.location.reload();
}