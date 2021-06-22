
var testQuestions = [
    {
        title: "NORMALLY used data types do not include?",
        choices: ["string", "booleans","alerts", "Number"],
        answer: "Alerts"
    },
    {
        title: "In a function, your IF and ELSE statements MUST be contained _____??",
        choices: ["quotes", "curly brackets","parenthesis", "Square brackets"],
        answer: "Parenthesis"
    },
    {
        title: "Javascript arrays can be used to hold....___?",
        choices: ["Numbers and Strings", "Other Arrays ","Booleans", "Square brackets"],
        answer: "All of the Above"
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables?",
        choices: ["Semicolins", "Curly Brackets","Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        title: "a very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Termianal/Bash","Console log"],
        answer: "Console log"
    },
];

var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var startTimer = document.querySelector("#startTimer");
var questionArea = document.querySelector("#questionArea");
var wrapper = document.querySelector("#wrapper");

var timeLeft = 77;
var interval = 0;
var penTime = 15;
var ulCreate = document.createElement("ul");

//starts timer on click and displays on the screen
startTimer.addEventListener("click", function() {
    if(interval === 0) {
        interval = setInterval(function(){
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

    if(timeLeft <= 0) {
        clearInterval(interval);
        allDone();
        currentTime.textContent ="Time's Up!";
    }
        }, 1000);
    }
    render(questionIndex);
});

//render questions and answers
function render(questionIndex) {
    questionArea.innerHTML = "";
    ulCreate.innerHTML = "";
    for(var i = 0; i < testQuestions.length; i++) {
        var userQuestion = testQuestions[questionIndex].title;
        var userChoices = testQuestions[questionIndex].choices;
        questionArea.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionArea.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
        
    })
}
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if(element.textContent == testQuestions[questionArea].answer){
            score++;
            createDiv.textContent = "Corrct! The answer is: " + testQuestions[questionArea].answer;
        } else {
            //deducts -15 seconds off for wrong answers
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:" + testQuestions[questionArea].answer;
        }
        
    }
}