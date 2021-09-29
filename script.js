// Declared variables
var score = 0;
var questionsIndex = 0;

var start = document.querySelector("#start");
var currentTime = document.querySelector("#currentTime");
var questionBox = document.querySelector("#questionBox");
var container = document.querySelector("#container");


var timeLeft = 60
var holdInterval = 0
var penaltyTime = 7;
var ulCreate = document.createElement("ul");


var quizQuestions = [ {
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
    } ]

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
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
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}






















// Variables and js code for leaderboard

    var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clearScores");
var goBack = document.querySelector("#return");

// Added an event listener to clear past scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreive from local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("index.html");
});