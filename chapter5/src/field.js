'use strict'

const carrotSound = new Audio('./sound/carrot_pull.mp3');

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.queyrSelector('.game__field');
    this.fieldRect = field.getBoundingClientRect();
    this.field.addEventListener('click', this.onclick())''
  }

  init() {
    this.field.innerHTML = '';
    this._addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    this._addItem('bug', BUG_COUNT, 'img/bug.png')
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width -  CARROT_SIZE;
  }
}