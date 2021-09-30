// Global variables

var score = 0;
var questionsIndex = 0;

var start = document.querySelector("#start");
var currentTime = document.querySelector("#currentTime");
var questionBox = document.querySelector("#questionBox");
var container = document.querySelector("#container");
var questionsDiv = document.querySelector("#questionsDiv")
var initialsForm = document.querySelector("#initialsForm")
var submitInitials = document.querySelector("#submitInitials")
var userInput = document.querySelector("#userInput")

var timeLeft = 60
var holdInterval = 0
var penaltyTime = 7;
var ulCreate = document.createElement("ul");


var questions = [{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>"
},
{
    title: "In JavaScript, the symbols + - * and / are:",
    choices: ["Operators", "Expressions", "Comparison Operators", "None of the above"],
    answer: "Operators"
},
{
    title: "When you want to use JavaScript to manipulate the currently displayed Web page, the Web page's JavaScript object name is:",
    choices: ["Frame", "Document", "Window", "browser_window"],
    answer: "Document"
},
{
    title: "A named element in a JavaScript program that is used to store and retrieve data is a _____.",
    choices: ["Method", "Assignment Operator", "Variable", "Strings"],
    answer: "Variable"
},
{
    title: "In JavaScript, which of the following is NOT an assignment operator?",
    choices: ["+=", "||", "*=", "="],
    answer: "||!"
}]

// Triggers timer on button, shows user a display on the screen
start.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionBox);
});

// Renders questions and choices to page 
function render(questionBox) {
    // Clears existing data 
    questionBox.innerHTML = "";
    ulCreate.innerHTML = "";
    // for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionsIndex].title;
    var userChoices = questions[questionsIndex].choices;
    questionBox.textContent = userQuestion;
    // }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionBox.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionsIndex].answer) {
            score++;
            createDiv.textContent = "Correct the answer is:  " + questions[questionsIndex].answer;
        } else {
            // Will deduct -7 seconds off secondsLeft for wrong answers
            timeLeft = timeLeft - penaltyTime;
            createDiv.textContent = "Wrong the correct answer is:  " + questions[questionsIndex].answer;
        }

    }
    // This determines what question the user is on 

    questionsIndex++;

    if (questionsIndex >= questions.length) {
        allDone();
        createDiv.textContent = "Quiz Completed" + " " + "You scored  " + score + "/" + questions.length + " correct";
    } else {
        render(questionBox);
    }
    questionsDiv.innerHTML = ""
    questionsDiv.appendChild(createDiv);

}
// All done function will append the last page

function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    initialsForm.classList.remove("hidden")

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials here: ";

    questionsDiv.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

}
// Added event listener for initials

submitInitials.addEventListener("click", function () {
    var initials = userInput.value;

    if (initials === null) {

        console.log("Value not entered!");

    } else {
        var finalScore = {
            initials: initials,
            score: timeLeft
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
        
        window.location.replace("leaderboard.html");
    }
});







