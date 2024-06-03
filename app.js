let addbutton = document.getElementById("btnadd");
let input = document.getElementById("txtlist");
let todos = document.getElementById("todo");

list = [];


addbutton.addEventListener('click', () => {
    let todoText = input.value;
    if (todoText == 0) {
        alert("Empty Write any task");
    } else {
        list.push(todoText);
        addtodo(todoText);
        input.value = "";
    }
})

function addtodo(todo) {
    let para = document.createElement('p');
    let deleteButton = document.createElement('button');

    deleteButton.innerText = "X";
    deleteButton.style.float = "right";
    deleteButton.style.padding="8px 14px 8px 14px"

    deleteButton.addEventListener('click', () => {
        todos.removeChild(para);

    });

    para.innerText = todo;
    todos.style.display="inline-flex";
    todos.style.flexDirection="column";
    para.style.marginTop="10px";
    para.style.width="228px";
    para.style.cursor="default"
    para.addEventListener('click', () => {
        para.style.textDecoration = "line-through"
    })
    para.appendChild(deleteButton);
    todos.appendChild(para);
}