function addNewItem(list, itemText) {
  const listItem = document.createElement("li");
  listItem.innerText = itemText;
  list.append(listItem);
}

const btnNew = document.querySelector(".addBtn");

btnNew.onclick = function () {
  const inputText = document.querySelector(".inputText");
  const itemText = inputText.Value;

  if (!itemText || itemText === "" || itemText === "") return false; //blank 방지

  addNewItem(document.querySelector(".todolist"), itemText);
  cossole.log("성공");
};
