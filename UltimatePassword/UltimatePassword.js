let input = document.querySelector("#input");
let hint = document.querySelector("#hint");
let number = document.querySelectorAll(".number");
let warn = document.querySelector("#warn");
let show = document.querySelector(".show-answer");
let answerArea = document.querySelector(".answer-area");
let full = document.querySelector(".full");
let start = document.querySelector(".start");
let startButton = document.querySelector("#start");
let clear = document.querySelector("#clear");
let check = document.querySelector("#check")
let resetButton = document.querySelector("#reset")
let success = document.querySelector(".success")
let again = document.querySelector(".try-again")
// let notice = document.querySelector(".notice");
// let ok = document.querySelector(".ok");

let min = 1;
let max = 100;
let answer;
let guessNumber = "";



startButton.addEventListener("click", gameStart);
show.addEventListener("click", showAnswer);
clear.addEventListener("click", clearInput);
check.addEventListener("click", judgeNumber)
resetButton.addEventListener("click", reset)

number.forEach(function(item){
    item.addEventListener("click", inputButtonNumber)
});

again.addEventListener("click", reset)






// ==============================
//#region           Function 區


function gameStart() {
    createAnswer();
    full.style.display = "none";
    start.style.display = "none";
}

function createAnswer() {
    answer = Math.floor(Math.random() * 100) + 1;
    min = 1;
    max = 100;
};

// function judgeInt() {
//     let notNumber = isNaN(parseInt(input.value))
//     if (notNumber) {
//         span.innerText = "請輸入數字！"
//     } else {
//         judgeNumber();
//     }
// }

function inputButtonNumber() {
    warn.innerText = "請輸入範圍內的數字";
    guessNumber = `${guessNumber}`+`${this.innerText}`;
    input.innerText = guessNumber;
}

function judgeNumber() {

    if (parseInt(input.innerText) > max || min > parseInt(input.innerText) ) {
        warn.innerText = "請輸入正確範圍！"
    } else if (answer > parseInt(input.innerText) && parseInt(input.innerText) >= min) {
        min = parseInt(input.innerText);
        hint.innerText = `${min}~${max}`
    } else if (parseInt(input.innerText) > answer && max >= parseInt(input.innerText) ) {
        max = parseInt(input.innerText);
        hint.innerText = `${min}~${max}`
    } else if (parseInt(input.innerText) == answer) {
        // notice.style.display = "flex";
        win();
    }
    input.innerText = "";
    guessNumber = "";
};

function win() {
    full.style.display = "flex";
    full.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    success.style.display = "flex"
}

function clearInput(){
    guessNumber = "";
    input.innerText = guessNumber;
}

function showAnswer() {

    answerArea.innerText = `答案是${answer}`
    answerArea.style.right = "0px"
}

function reset(){
    min = 1;
    max = 100;
    input.innerText = "";
    guessNumber = "";
    warn.innerText = "請輸入範圍內的數字";
    hint.innerText = `${min}~${max}`
    full.style.display = "block";
    start.style.display = "flex";
    success.style.display = "none"
    full.style.backgroundColor = "#ffffff"
    answerArea.style.right = "-100%"
}



//#endregion
// ==============================