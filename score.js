var urlParams = new URLSearchParams(window.location.search);
var score = urlParams.get("score");

var scoreboard = document.getElementById("score-board")
var playAgain = document.getElementById("play-again-button")
scoreboard.innerHTML = score;
playAgain.onclick = () => {
    location.href = "./game.html"
}