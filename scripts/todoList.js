function todoBtn() {
    let usrInp = document.getElementById("usrInp").value.trim();

    if (usrInp === '') {
        alert('Input must be a valid string')
    } else {
        let todoData = localStorage.getItem("todoList");

        if (todoData === null) {
            let data = [];
            data.push(usrInp);

            localStorage.setItem('todoList', JSON.stringify(data))

        } else if (todoData !== null) {
            todoData = JSON.parse(todoData); 

            todoData.push(usrInp)

            localStorage.setItem('todoList', JSON.stringify(todoData))
        }

        loadTodo()
    }
}

function loadTodo() {
    let todoData = localStorage.getItem("todoList");
    todoData = JSON.parse(todoData);
    let exsistingList = document.querySelector('ul');
    if (exsistingList) {
        exsistingList.remove();
    }


    let res = document.createElement('ul')
            
    let li = todoData.map(data => {
        return `<li> ${data} </li>`
    })

    li = li.join(' '); 

    res.innerHTML = li;

    document.body.appendChild(res);
}

function deleteTodo(index) {
    const todoData = localStorage.getItem("todoList");
    if (todoData !== null) {
      todoData = JSON.parse(todoData);
      todoData.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(todoData));
  
      loadTodo();
    }
  }

loadTodo()
