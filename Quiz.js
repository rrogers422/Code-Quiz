
var testQuestions = [
    {
        title: "NORMALLY used data types do not include?",
        choices: ["string", "booleans", "alerts", "Number"],
        answer: "Alerts"
    },
    {
        title: "In a function, your IF and ELSE statements MUST be contained _____??",
        choices: ["quotes", "curly brackets", "parenthesis", "Square brackets"],
        answer: "Parenthesis"
    },
    {
        title: "Javascript arrays can be used to hold....___?",
        choices: ["Numbers and Strings", "Other Arrays ", "Booleans", "Square brackets"],
        answer: "All of the Above"
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables?",
        choices: ["Semicolins", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        title: "a very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Termianal/Bash", "Console log"],
        answer: "Console log"
    },
];

var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var startTimer = document.querySelector("#startTime");
var questionArea = document.querySelector("#questionArea");
var wrapper = document.querySelector("#wrapper");

var timeLeft = 77;
var interval = 0;
var penTime = 15;
var ulCreate = document.createElement("ul");



// Triggers timer on button and displays on screen
startTimer.addEventListener("click", function() {
    if (interval === 0) {
        interval = setInterval( function() {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(interval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and answers
function render(questionIndex) {    questionArea.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < testQuestions.length; i++) {
        var userQuestion = testQuestions[questionIndex].title;
        var userChoices = testQuestions[questionIndex].choices;
        questionArea.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
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
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + testQuestions[questionIndex].answer; 
        } else {
            // Will deduct -15 seconds off secondsLeft for wrong answers
            timeLeft = timeLeft - penTime;
            createDiv.textContent = "Wrong! The correct answer is:  " + testQuestions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= testQuestions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "Finished!" + " " + "You got  " + score + "/" + testQuestions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionArea.appendChild(createDiv);

}
function allDone() {
    questionArea.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Finished!"

    questionArea.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionArea.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var createP2 = document.createElement("p");
        clearInterval(interval);
        createP.textContent = "final score: " + timeRemaining;

        questionArea.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter initials: ";

    questionArea.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionArea.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionArea.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Takes user to highscores page
            window.location.replace(".");
        }
    });

}


