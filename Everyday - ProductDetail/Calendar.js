let today = new Date();
let nowYear = today.getFullYear();
let nowMonth = today.getMonth();
let nowDate = today.getDate();
let changeYear = today.getFullYear()
let changeMonth = today.getMonth();
let monthFirstWeekDay = new Date(nowYear,nowMonth,0).getDay();
let calenders = document.querySelectorAll("#calendar")
console.log(monthFirstWeekDay);
console.log(new Date(2023,2,6).getDay());


function renderThisMoth(c){
    let monthFirstWeekDay = new Date(changeYear,changeMonth,1).getDay();
    let monthlastDate = new Date(changeMonth,changeMonth+1,0).getDate();
    let days = c.querySelectorAll(".day")
    let index = 1;
    for(let i = monthFirstWeekDay; i < monthFirstWeekDay+monthlastDate; i++ ){
        let date = document.createElement("span")
        // let div = document.createElement("div")
        date.innerText = index.toString();
        // div.innerText = "$12,800"
        days[i].appendChild(date);
        // days[i].appendChild(div);

        index++;
    }
}
function renderAllCalendar(){
    calenders.forEach(c => {
        renderThisMoth(c);
    })
}

window.onload= function(){
    renderAllCalendar();
}