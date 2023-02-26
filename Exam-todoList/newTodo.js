const app = new Vue({
    el: '#app',
    data: {
        newTodoVal: '',
        todoList: []
    },
    created() {
        if (localStorage.getItem('todo-list') != null) { 
            this.todoList = JSON.parse(localStorage.getItem('todo-list')) 
            this.todoList = this.todoList.map(x => ({
                ...x,
                isEdit: false
            }))
        }
    },
    methods: {
        addTodo() {
            this.todoList.push({ content: this.newTodoVal, checked: false })
            this.saveLocalStorage()
            this.newTodoVal = ''
        },
        checkedHandler(index) {
            this.todoList[index].checked = !this.todoList[index].checked
            this.saveLocalStorage()
        },
        editHandler(index) {
            this.todoList[index].isEdit = true
        },
        editTodo(index) {
            this.saveLocalStorage()
            this.todoList[index].isEdit = false
        },
        delTodo(index) {
            this.todoList.splice(index,1)
            this.saveLocalStorage()
        },
        saveLocalStorage() {
            this.todoList = this.todoList.map(x => ({
                ...x,
                isEdit: false
            }))
            localStorage.setItem('todo-list', JSON.stringify(this.todoList))
        }
    }
})