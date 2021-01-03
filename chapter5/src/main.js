'use strict';
import PopUp from './popup.js';
import Field from './Field.js';
import * as sound from './sound.js'

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
})

const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.onItemClick((item) => onItemClick);


function onItemClick(event) {
  if(!started) {
    return;
  }
  if(item === 'carrot') {
    score++;
    playSound(carrotSound);
    updateScoreBoard();
    if(score == CARROT_COUNT) {
      
      finishGame(true); // boolean이 좋은 방법은 아님
    }
  } else if (item === 'bug') {
    // 벌레!
    finishGame(false);
  }
}


// field.addEventListener('click', (event) => onFieldClick(event));
field.addEventListener('click', onFieldClick);
gameBtn.addEventListener('click', () => {
  if(started) {
    stopGame();
  } else {
    startGame();
  }
})

function startGame() {
    started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
  sound.playBackground();
}

function stopGame() {
    started = false;
  stopGameTimer();
  hideGameButton();
  gameFinishBanner.showWithText('REPLAY?')
  sound.playAlert();
  stopSound(bgSound);
}

function finishGame(win) {
  started = false;
  hideGameButton();
  if(win) {
    sound.playWin();
  } else {
    sound.playBug();
  }
  // if(win === true) {
  //   showPopUpWithText('YOU WON')
  // } else {
  //   showPopUpWithText('YOU LOST')
  // }
  stopGameTimer();
  sound.stopBackground();
  gameFinishBanner.showWithText(win? 'YOU WON' : 'YOU LOST');
} 

function showStopButton() {
  const icon = gameBtn.querySelector('.fas');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
  gameBtn.style.visibility = 'visible';
  
}

function hideGameButton() {
  gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}

function initGame() {
  score = 0;
  gameScore.innerText = CARROT_COUNT;
  // 벌레와 당근을 생성한뒤 field에 추가해줌
  gameField.init();
}

function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(CARROT_COUNT === score);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`
}

initGame();














