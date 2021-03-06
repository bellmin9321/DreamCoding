const input = document.querySelector('.footer__input')
const addBtn = document.querySelector('.footer__button')
const items = document.querySelector('.items')

function onAdd() {
  const text = input.value;
  if(text === ''){
    input.focus();
    return;
  }
  console.log(text);
  
  const item = createItem(text);
  // createItem = 밑에 함수
  items.appendChild(item);
  items.scrollIntoView({block: 'center'});
  input.value = '';
  input.focus();
}

function createItem (text) {
  const itemRow = document.createElement('li')
  itemRow.setAttribute('class', 'item__Row')

  const item = document.createElement('div');
  item.setAttribute('class', 'item')

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name')
  name.innerText = text;

  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('class', 'item__delete')
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow)
  })

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;

}

addBtn.addEventListener('click', () => {
  onAdd();
})

input.addEventListener('keypress', (event) => {
  if(event.key == "Enter") {
    onAdd();
  }
})