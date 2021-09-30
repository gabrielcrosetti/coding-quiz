// Variables and js code for leaderboard

var highScore = document.querySelector("#highScore");
var clearScores = document.querySelector("#clearScores");
var return1 = document.querySelector("#return1");

// Event Listener to clear old scores

clearScores.addEventListener("click", function () {
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

return1.addEventListener("click", function () {
    window.location.replace("index.html");
});