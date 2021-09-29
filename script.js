// Declared variables
var score = 0;
var questionsIndex = 0;

var timer = document.querySelector("#start");
var currentTime = document.querySelector("#currentTime");
var questionsDiv = document.querySelector("#questionBox");
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