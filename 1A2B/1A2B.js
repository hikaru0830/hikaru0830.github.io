
let answer, answerArr, show, start, reset, submit, input, recordBox,full, again;
let a,b;
window.onload = function(){
    answer = createAnswer();
    show = document.querySelector(".show-answer");
    start = document.querySelector(".start");
    reset = document.querySelector(".reset");
    submit = document.querySelector(".submit");
    input = document.querySelector("input");
    recordBox = document.querySelector(".record-box");
    again = document.querySelector(".again");
    full = document.querySelector(".full");
    start.addEventListener("click", startGame)
    submit.addEventListener("click", putRecord)
    again.addEventListener("click", resetGame);
    reset.addEventListener("click", resetGame)
    show.addEventListener("click", function(){
        alert(answer)
    })
}

function startGame(){
    // $(document).ready(function(){
    //     $(".show-answer").hover(function(){
    //         $(".show-answer").css("background-color","#CADCA1")
    //     })
    // })
    // show.disabled = false;
    // show.style.backGroundColor = "#CADCA1"
}
function createAnswer(){
    let random;
    answerArr = [];
    do{
        random = Math.floor(Math.random()*10);
        if(!(answerArr.includes(random))){
            answerArr.push(random);
        }
    }while(answerArr.length < 4)
    return answerArr.join("");
}

function judgeAB(){
    a = 0;
    b = 0;
    let inputSplit = input.value.split("")
    let inputArr = inputSplit.map(Number)
    inputArr.forEach( num => {
        if(answerArr.includes(num)){
            b = b + 1;
            if(inputArr.indexOf(num) == answerArr.indexOf(num)){
                a = a + 1;
            }
        }
    })
    b = b - a;
}
function resetGame(){
    recordBox.innerHTML = "";
    answer = createAnswer();
    full.style.display = "none";

}
function judgeWin(){
    if((a == 4) && (b == 0)){
        full.style.display = "block"
    }
}

function putRecord (){
    judgeAB();
    let tag = document.createElement("div");
    let text = document.createElement("div");
    let record = document.createElement("div");
    tag.setAttribute("class", "tag");
    text.setAttribute("class", "text");
    record.setAttribute("class", "record");
    tag.innerText = `${a}A${b}B`;
    text.innerText = input.value;
    record.appendChild(tag);
    record.appendChild(text);
    recordBox.appendChild(record);
    if(a > 0){
        tag.style.backgroundColor = "#50C5FF";
    }
    if (a == 4) {
        tag.style.backgroundColor = "#FFC32A";
    }
    input.value = "";
    let timeout = setTimeout(judgeWin,100)
}