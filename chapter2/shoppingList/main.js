/* 어떤 기능을 구현할지 계획하기
1. input에 text 타이핑
2. + 버튼 click or Enter 눌렀을 때 list 등록
3. list 삭제
*/

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
//   //2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
  const item = createItem();
//   //3. items 컨테이너안에 새로 만든 아이템을 추가한다
  items.appendChild(item);
     //4. 새로 추가된 아이템으로 스크롤링
  items.scrollIntoView({blcok: 'center'})
//   //5. 인풋을 초기화 한다
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li')
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttrivute('class', 'item')

  const name = document.createElement('span');
  span.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete')
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow)
  })
  
  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(name);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if(event.key === "Enter") {
    onAdd();
  }
}) //Enter 눌렀을 때 list 추가