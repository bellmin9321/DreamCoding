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

function startTimer() {

// 정리 잘된 var, const, let 사용 비교 https://poiemaweb.com/es6-block-scope

  const x = setInterval(function() {
    let time = 10;

    timer.innerHTML = "0:" + time ;
    time--;

    if(time < 10) {time = "0" + time
  } else ( time--)
    console.log("timing")

    if ( time <= 0) {
      clearInterval(x);
      time.innerHTML = "";
      alert('x');
    }
  }, 1000);
}
// function startTimer(seconds, cb) {
//   const remainingTime = seconds;
//   window.setTimeout(function() {
//     cb();
//     console.log(remainingTime);
//     sec
//     }
//   }, 1000);

//   const callback = function() {
//     console.log('callback');
// }

// startTimer(90, callback);

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