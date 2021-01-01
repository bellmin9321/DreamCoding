'use strict'

const carrotSound = new Audio('./sound/carrot_pull.mp3');

const CARROT_SIZE = 80;

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.queyrSelector('.game__field');
    this.fieldRect = field.getBoundingClientRect();
    this.field.addEventListener('click', this.onclick())
  }

  init() {
    this.field.innerHTML = ''; // 이미지 중복생성 방지
    this._addItem('carrot', this.carrotCount, 'img/carrot.png');
    this._addItem('bug', this.bugCount, 'img/bug.png')
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  // 제일 어려운 부분(반복 숙달할 것)
  addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }

  onClick(event) {
    const target = event.target;
    if(target.matches('.carrot')) {

      target.remove();
      playSound(carrotSound);
      this.onItemClick && this.onItemClick('carrot');
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick('bug');
    }
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}