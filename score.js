//Data

var limit = 5;
var score1 = 0;
var score2 = 0;
var counterText = document.querySelector(".counter")
var numLimit = document.querySelector("#num-limit");
var newLimit = document.querySelector("#quantity");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btnr = document.querySelector("#btn-r");

//Btn / inputevents
btn1.addEventListener("click", function () {
    if (score1 < limit) {
        score1++;
        printScore();

        if (score1 == limit) {
            stopCount();
        }
    }
});

btn2.addEventListener("click", function () {
    if (score2 < limit) {
        score2++;
        printScore();
        if (score2 == limit) {
            stopCount();
        }
    }
});

btnr.addEventListener("click", function () {
    resetScore();
});

newLimit.addEventListener("input", function () {
    limit = this.value;
    numLimit.textContent = limit;
});

function resetScore() {
    score1 = 0;
    score2 = 0;
    btn1.removeAttribute('disabled');
    btn2.removeAttribute('disabled');
    btn1.classList.add("btn-hover");
    btn2.classList.add("btn-hover");
    counterText.classList.remove("win-background");
    printScore();
}

function getScore() {
    var scores = score1 + " - " + score2;
    return scores;
}

function printScore() {
    counterText.textContent = getScore();
}

function stopCount() {
    counterText.classList.add("win-background");
    btn1.classList.remove("btn-hover");
    btn2.classList.remove("btn-hover");
    btn1.setAttribute('disabled', 'disabled');
    btn2.setAttribute('disabled', 'disabled');
}