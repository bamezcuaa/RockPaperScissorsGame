let userScore = 0;
let robotScore = 0;
const userScore_span = document.getElementById("user-score");
const robotScore_span = document.getElementById("robot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getRobotChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = (Math.floor (Math.random() * 3));
    return choices [randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, robotChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    robotScore_span.innerHTML = robotScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(robotChoice)}, you win!`;
   
}

function lose(userChoice, robotChoice) {
    robotScore++;
    userScore_span.innerHTML = userScore;
    robotScore_span.innerHTML = robotScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(robotChoice)}, try again!`; 
}

function draw(userChoice, robotChoice) {
    userScore_span.innerHTML = userScore;
    robotScore_span.innerHTML = robotScore;
    result_p.innerHTML = `${convertToWord(userChoice)} same as ${convertToWord(robotChoice)}, it's a draw!`;
}


function game(userChoice) {
    const robotChoice = getRobotChoice();
    switch (userChoice + robotChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, robotChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, robotChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, robotChoice);
            break;   
    }
}

function main() {

    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissors_div.addEventListener("click", function() {
        game("s");
    })
}

main();