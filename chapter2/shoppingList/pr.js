const toDoForm = document.querySelector(".send-text"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".todolist");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, toDos)
}

function showToDos(text) {
  const li = document.createElement('li')
  const delBtn = document.createElement('button')
  li.innerText = text;
  delBtn.innerText = "X"
  li.id = toDos.length + 1;
  delBtn.addEventListener("click", handleDelete)
  li.appentChild(delBtn)
  toDoList.appendChild(li)
  toDoInput.value = "";
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  };
  toDos.push(toDoObj);
  saveToDos()
}

function handleSubmit() {
  const currentValue = toDoInput.value;
  showToDos(currentValue)
}

function loadList () {
  const loadtoDos = locallStorage.getItem(TODOS_LS)
  toDoForm.addEventListener("submit", handleSubmit)
  if (loadToDos !== null ){
    const parseToDo = JSON.parse(loadToDos);
    parseToDo.forEach(function (toDo) {
      showToDos(toDo.text)
    })
  } 
}

function show() {
  loadList();
}
show()