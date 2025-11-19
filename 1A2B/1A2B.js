
let answer, answerArr, show, start, reset, submit, input, recordBox,full, again, warn;
let a,b;
window.onload = function(){
    show = document.querySelector(".show-answer");
    start = document.querySelector(".start");
    reset = document.querySelector(".reset");
    submit = document.querySelector(".submit");
    input = document.querySelector("#guess");
    recordBox = document.querySelector(".record-box");
    again = document.querySelector(".again");
    full = document.querySelector(".full");
    warn = document.querySelector(".warn");
    start.addEventListener("click", startGame)
    submit.addEventListener("click", judgeBug)
    again.addEventListener("click", resetGame);
    reset.addEventListener("click", resetGame)
    show.addEventListener("click", function(){
        alert(answer)
    })
    input.addEventListener("input", function(){
        warn.style.opacity = "0";
    })
}

function startGame(){
    input.disabled = false;
    let block = document.querySelectorAll(".disabled");
    block.forEach(d => {
        d.style.pointerEvents = "all";
        d.style.opacity = "1";
    })
    start.style.pointerEvents = "none";
    start.style.opacity = "0.5";
    answer = createAnswer();
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
        if(inputArr.indexOf(num) == answerArr.indexOf(num)){
            a = a + 1;
        }else if(answerArr.includes(num)){
            b = b + 1;
        }
    })
}
function resetGame(){
    recordBox.innerHTML = "";
    full.style.display = "none";
    input.disabled = true;
    start.style.pointerEvents = "all";
    start.style.opacity = "1";
    let block = document.querySelectorAll(".disabled");
    block.forEach(d => {
        d.style.pointerEvents = "none";
        d.style.opacity = "0.5";
    })


}
function judgeWin(){
    if((a == 4) && (b == 0)){
        full.style.display = "block"
    }
}
function putRecord (){

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
function judgeBug(){
    let inputArr = input.value.split("");
    let only = inputArr.filter((num, index) => inputArr.indexOf(num) === index)
    //判斷是否為數字    
    if(isNaN(Number(input.value))){
        warn.style.opacity = "1";
        warn.innerText = "請輸入數字！";
    //判斷是否重複
    }else if(only.length < 4){
        warn.style.opacity = "1";
        warn.innerText = "請輸入4碼不重複的數字！";
    }else if (only.length == 4){
        judgeAB();
        putRecord ();
    }


}