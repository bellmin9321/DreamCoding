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
    alert('game restart')
  }
}

// function startTimer() {
//   const x = setInterval(function() {
//     let time = 10;

//     timer.innerHTML = "0:" + time ;
//     time--;

//     if(time < 10) {time = "0" + time}
//     console.log("timing")

//     if ( time <= 0) {
//       clearInterval(x);
//       time.innerHTML = "";
//       alert('x');
//     }
//   }, 1000);
// }
//   function timer(t) {
//     const count = 60;
//     const min;
//     const sec;

//     min = Math.floor(count / 60);
//     sec = count - (min * 60);


//     document.querySelector('.timer').innerHTML = min + ":" + sec;
  
//     if(count > 0 ) time--
//     else {
//       clearInterval(timer);
//       document.form.submit();
//     } 
//     return(min+":"+sec);
//   }
  
// setInterval vs setTimeout
// 특정 시간 이후 단 한 번만 특정 함수 또는 코드를 실행
// 2번째 인자의 시간이 경과하면 1번째 인자의 함수를 실행

/*
return
1. 값을 반환하는데 사용
2. 지역변수를 알 수 있는데 사용
3. 현재 진행중인 함수를 중지
*/