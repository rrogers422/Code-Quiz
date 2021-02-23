var timer = document.querySelector("#timer");
var startTime = document.querySelector("#startTime");
var questionArea = document.querySelector("#question");
var selectionArea = document.querySelector("#options");
var rightWrong = document.querySelector("#right-wrong");

var testQuestions = [
    {
        title: "NORMALLY used data types do not include?"
        choices: ["string", "booleans","alerts", "Number"],
        answer: "Alerts"
    },
    {
        title: "In a function, your IF and ELSE statements MUST be contained _____??"
        choices: ["quotes", "curly brackets","parenthesis", "Square brackets"],
        answer: "Parenthesis"
    },
    {
        title: "Javascript arrays can be used to hold....___?"
        choices: ["Numbers and Strings", "Other Arrays ","Booleans", "Square brackets"],
        answer: "All of the Above"
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables?"
        choices: ["Semicolins", "Curly Brackets","Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        title: "a very useful tool used during development and debugging for printing content to the debugger is:"
        choices: ["Javascript", "Termianal/Bash","Console log"],
        answer: "Console log"
    },
];



//if start button clicked
startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo"); //show info box
}
//if exit button clicked
exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); //hide info box
}
//if continue button clicked
continueBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); //hide info box with new css selector
    quizBox.classList.add("activeQuiz"); //show quiz box with new css selector
    //call renderQuestion funtion - specify position 1
     //call questionCounter function - specify start question count at 1
    //call startTimer function - specify second count
}
let questionCount = 0;//start with question in position 1
let questionNumber = 1; //start with question 1
let timerInterval; //start with undefined timer count
let seconds = 61; //start timer with 60 sec
nxt_btn.onclick = () => { //if next button is clicked
    if (questionCount < quiz.length - 1) {
        //increment question count
        //increment number count
        //call renderQuestion and questionCounter funtions simultaneously
        
    } else { // if the question count is not less than the quiz length
        console.log("You've completed the Quiz!");
    }    
}
// getting questions and choices from array
function {//define renderQuestion function
//clear questions div = allows content of div to be replaced with each new question and it's contents
// specify where question text and question number will display - pulling from quiz object index
// specify where choices text will display - pulling from quiz object index
//set question text to display in DOM
//set choices text to display in each choice element in 
    //set new constant variable choice to link to each choice item in DOM
    for (let i = 0; i < choice.length; i++) {//when a choice is clicked - set choice user clicks to 'choice selected' 
    }
}
function { //define 'choice selected' function, and compare with correct answer
    let // define new variable for user answer and assign to [answer in quiz object] and display textcontent for answer
    let // define new variable for correct answer and assign to [question count in quiz object].answer
    let //define new variable for 'all choices'and assign  variable to length of choice items (which are children of 'choice list')
    if (userAnswer == correctAnswer) {
        answer.classList.add("correct"); //add css selector to show green if correct answer is selected
        console.log("Answer is Correct"); 
    } else {
        answer.classList.add("incorrect"); //add css selector to show red if wrong selection is made
        console.log("Answer is Wrong");
        //if answer is incorrect, automatically show correct answer
        for (let i = 0; i < allChoices; i++){
            if (choiceList.children[i].textContent == correctAnswer) {
                choiceList.children[i].setAttribute("class", "choice_item correct");
            }
        }
    }
    
    for (let i = 0; i < allChoices; i++) {// once user selects, disable all options
        choiceList.children[i].classList.add("disabled"); //disable pointer events when a selection is made with new css selector
    }
}
function startTimer() { //define startTimer function
    
}
function { //define questionCounter function using quiz object index
    const //define new variable for questionCounter and link to total_questions div
    let // define new variable to specify where question count will appear in DOM
    bottomQuestionCounter.innerHTML = totalQuesCountText; // set question counter innerHTML to variable linked to DOM
}