
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  //1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if(text === '') {
    input.focus();
    return;
  }
  console.log(text);
=
  const item = createItem(text);

  items.appendChild(item);
  items.scrollIntoView({block: 'center'})
  input.value = '';
  input.focus();
}

items.addEventListener('click', () => {
  
})

let id = 0; 
function createItem(text) {
  const itemRow = document.createElement('li')
  itemRow.setAttribute('class', 'item__row');
  itemRow.innerHTML = `
  <div class="item" data-id=${id}>
  <span class="item__name">${text}</span>
  <button class="item__delete">
    <i class="fas fa-trash-alt" data-id=${id}></i>
  </button>
</div>      
  <div class="item__divider"></div>`
  id++;
  return itemRow}

  
addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if(event.key === "Enter") {
    onAdd();
  }
}) 

items.addEventListener('click', event => {
  if(event.target.dataset.id) {
    const toBeDeleted = document.querySelector('.item');
    toBeDeleted.remove();
  }
  
})