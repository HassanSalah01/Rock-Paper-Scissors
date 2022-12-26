let p1pick = "";
let p2pick;
p2pick = Math.floor(Math.random() * 3);
let p3 = playetTwo(p2pick);
let p1score = 0;
let p2score = 0;
let trackScore = [];

function playetTwo(p2) {
    if (p2 == 0) {
        p2 = "rock";
    } else if (p2 == 1) {
        p2 = "paper";
    } else {
        p2 = "scissors";
    }
    return p2;
}
function p1Gmae(p1pick, p3) {
    console.log(p1pick + " " + p3);
    if (p1pick === "scissors" && p3 === "paper") {
        p1score += 1;
        document.getElementById("fin").innerHTML = "you won";
    } else if (p1pick === "paper" && p3 === "rock") {
        p1score += 1;
        document.getElementById("fin").innerHTML = "you won";
    } else if (p1pick === "rock" && p3 === "scissors") {
        p1score += 1;
        document.getElementById("fin").innerHTML = "you won";
    } else if (p1pick === p3) {
        document.getElementById("fin").innerHTML =
            "No one won , please play again";
    } else {
        p2score += 1;
        document.getElementById("fin").innerHTML = "Ai won";
    }
    console.log(p1score + " " + p2score);
    document.getElementById("sc1").innerHTML = p1score;
    document.getElementById("sc2").innerHTML = p2score;
    trackScore.push(p1score);
}

function pick() {
    p2pick = Math.floor(Math.random() * 3);
    p3 = playetTwo(p2pick);
}

function p1Gmaee(atr) {
    p1pick = atr;
    p1Gmae(p1pick, p3);
    pick();
    console.log(trackScore.length);
}
