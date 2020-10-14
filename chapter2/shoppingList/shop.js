const toDoForm = document.querySelector(".send-text"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".todolist");

const TODOS_LS = "toDos";
// local Storage에 key 값으로 저장될 이름

let toDos = [];

function handleDelete() {
  const li = event.target.parentNode;
  toDoList.removeChild(li);
  const deleteToDos = toDos.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  toDos = deleteToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function showToDos(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  li.innerText = text;
  delBtn.innerText = "X"; // 안에 문자넣기
  li.id = toDos.length + 1;
  delBtn.addEventListener("click", handleDelete);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  toDoInput.value = "";
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit() {
  const currentValue = toDoInput.value;

  if(!currentValue || currentValue  === "" || currentValue === " ") return false;
// 공백인 경우 list 추가 방지
  showToDos(currentValue);
}

function loadList() {
  // local Storage에 저장된 toDoList를 가지고 오는 함수
  const loadToDos = localStorage.getItem(TODOS_LS);
  toDoForm.addEventListener("submit", handleSubmit);
  if (loadToDos !== null) {
    const parseToDo = JSON.parse(loadToDos);
    parseToDo.forEach(function (toDo) {
      showToDos(toDo.text);
    });
  }
} // input 박스에 할 일을 적고 엔터를 치면 submit 이벤트가 발생하는데 submit 이벤트를 다루기 위한 핸들러 추가

const btnClick = document.querySelector('.addBtn');
btnClick.onclick = function() {
  const inputText = document.querySelector('.inputText');
  const itemText = inputText.value;

  if(!itemText || itemText  === "" || itemText === " ") return false;

  showToDos(document.querySelector('.todolist'), itemText);
  const parseItem = JSON.parse
}

const checkBox = document.querySelector('.input')

checkBox.type = 'checkBox';
checkBox.onclick = updateItemStatus;

function show() {
  loadList();
}
show();

// function addNewItem(list, itemText) {
//   const listItem = document.createElement("li");
//   listItem.innerText = itemText;
//   list.append(listItem);
// }

// const btnNew = document.querySelector(".addBtn");

// btnNew.onclick = function () {
//   const inputText = document.querySelector(".inputText");
//   const itemText = inputText.Value;

//   if (!itemText || itemText === "" || itemText === "") return false; //blank 방지

//   addNewItem(document.querySelector(".todolist"), itemText);
//   cossole.log("성공");
// };
