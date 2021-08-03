let todos = []
function add() {
    let input = document.getElementById("todo").value
  todos.push(input)
   console.log(todos)
   
}

function printTodos() {
    let list = document.getElementById('list');
    list.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        let li = document.createElement('li');
        list.appendChild(list);
    }
}
a