//宣告
let num = 0;
let listBox = document.querySelector(".list-box");
let add = document.querySelector(".add");
let addBtn = document.querySelector(".addBtn");

//DOM
addBtn.addEventListener("click", addTodoList);

//Function
function updateData(){
    listBox.innerHTML = ""
    let todoListArr = JSON.parse(localStorage.getItem("todo-list"));
    if(todoListArr != null) renderTodoList(todoListArr);
}
function renderTodoList(arr){
    arr.forEach((item,index) => {
        let listItem = document.createElement("div")
        listItem.setAttribute("class","list-item")

        let checkbox = document.createElement("input")
        checkbox.setAttribute("class","checkbox")
        checkbox.setAttribute("type","checkbox")
        
        if(item.checked == true){ //將已完成的項目維持打勾的狀態
            checkbox.setAttribute("checked","true")
        }

        let list = document.createElement("input")
        list.setAttribute("type","text")
        list.setAttribute("class","list")
        list.setAttribute("disabled","true")
        list.setAttribute("value",item.content)
        
        let editBtn = document.createElement("div")
        editBtn.setAttribute("class","editBtn btn")
        editBtn.innerText = "編輯"
        
        let deleteBtn = document.createElement("div")
        deleteBtn.setAttribute("class","deleteBtn btn")
        deleteBtn.innerText = "刪除"

        //編輯按鈕、刪除按鈕、核取方塊的監聽事件↓↓
        //========================================
        editBtn.addEventListener("click", function(){
            let todoListArr = JSON.parse(localStorage.getItem("todo-list"));
            if(list.disabled == true){
                list.disabled = false
                list.style.backgroundColor = "#fff"
                editBtn.style.backgroundColor = "#A8A6C7"
                editBtn.style.color = "#fff"
                editBtn.innerText = "儲存"
            }else{
                todoListArr[index].content = list.value
                localStorage.setItem("todo-list",JSON.stringify(todoListArr));
                list.disabled = true
                list.style.backgroundColor = "#E5E4EE"
                editBtn.style.backgroundColor = "#f3db41"
                editBtn.innerText = "編輯"
                updateData();
            }
        })
        deleteBtn.addEventListener("click", function(){
            let todoListArr = JSON.parse(localStorage.getItem("todo-list"));
            todoListArr.splice(index,1)
            localStorage.setItem("todo-list",JSON.stringify(todoListArr));
            updateData();
        })
        checkbox.addEventListener("click", function(){
            let todoListArr = JSON.parse(localStorage.getItem("todo-list"));
            if(checkbox.checked == true){
                todoListArr[index].checked = true
            }else{
                todoListArr[index].checked = false
            }
            localStorage.setItem("todo-list",JSON.stringify(todoListArr));
            updateData();
        })
        //========================================

        listItem.appendChild(checkbox)
        listItem.appendChild(list)
        listItem.appendChild(editBtn)
        listItem.appendChild(deleteBtn)
        listBox.appendChild(listItem)
    })
}
function addTodoList(){
    if(add.value != ""){
        let newValue = {
            content: add.value,
            checked: false
        }
        let todoListArr;
        if(localStorage.getItem("todo-list") != null){
            todoListArr = JSON.parse(localStorage.getItem("todo-list"));
        }else{
            todoListArr = [];
        }
        todoListArr.push(newValue)
        localStorage.setItem("todo-list",JSON.stringify(todoListArr))
        updateData()
        add.value = "";
    }
}

//window.onload
window.onload = function(){
    updateData();
}