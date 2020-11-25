const start = document.querySelector('.start');
const timer = document.querySelector('.timer');
const rest = document.querySelector('.rest');
const carrot = document.querySelector('.carrot');
const bug = document.querySelector('.bug');

/*
쉬운것부터 작업
1. start 버튼 누르면 || 로 바뀌기 > 타이머 시작
2. 
*/

// timer 라 하면 const timer 랑 겹치므로 안된다!!!!
// 위에 함수선언한거랑 다른이름으로
function play() {
  start.innerHTML = '<div class><i class="fas fa-stop"></i></i></div>'
  startTimer();
}
// 정리 잘된 var, const, let 사용 비교 https://poiemaweb.com/es6-block-scope

function startTimer() {
  let time = 1;
  timer.innerHTML = "0:" + time;
  rest.innerHTML = 10;
  setInterval(decTime, 1000);
  return time;
  function decTime() {
    if(time != 0) {
      time = time - 1
      timer.innerHTML = "0:" + time;
      
      console.log(time)
    } else {
      setTimeout(replay, 1000);
      function replay() {
        const popup = document.createElement('div');
        popup.setAttribute('class', 'pop-up')
        popup.innerHTML = `
        <div class="replay"><i class="fas fa-redo"></i></div>
        <span>Replay</span>
        `
        console.log('popup')
      }
    }
  }
}

function stopTimer() {
  start.onclick = function () {
    clearInterval(startTimer())
    const popup = document.createElement('div');
        popup.setAttribute('class', 'pop-up')
        popup.innerHTML = `
        <div class="replay"><i class="fas fa-redo"></i></div>
        <span>Replay</span>
        `
        console.log('popup')
  }
}