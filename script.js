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

