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

// function deleteItem() {
//   const
// }

// start.addEventListener('click', (event) => {
//   if(event.target.) {

//   } 
// })

// const x = setInterval(function() {
//   const time = 60;
//   const min = ""
//   const sec = ""
//   min = parseInt(time/60);
//   sec = time%60;
//   document.querySelector('.timer').innerHTML = min + ":" + sec + time--;

//   if ( time < 0 ) {
//     clearInterval(x);
//     document.querySelector('.timer').innerHTML = "TIME OVER";
//   }
// }, 1000);
document.addEventListener("DOMContentLoaded", function() {
  timer();

  setInterval(timer, 1000);
})

function timer(duration) {
  const count = duration * 60;
  const min, sec;

  min = parseInt(timer / 60 % 60, 10);
  sec = parseItn(timer % 60, 10);
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  document.querySelector('.timer').innerHTML = min + ":" + sec;

  if(count < 0 ) {
    clearInterval()
 } else ( count = 0) {
  alert("GAME OVER")
 }
}

// 1자리 숫자인 경우 앞에 0을 붙여줌
function addzero(num) {
  if(num<10) { num = "0" + num;}
  return num;
}

// const count = 60;
// const time = 60;
// const min = ""
// const sec = ""
// min = parseInt(time/60);
// sec = time%60;
// document.querySelector('.timer').innerHTML = 
// function start() {
//   clearInterval(time);
//   time = setInterval("func()", 1000);
// }


// setInterval vs setTimeout
// 특정 시간 이후 단 한 번만 특정 함수 또는 코드를 실행
// 2번째 인자의 시간이 경과하면 1번째 인자의 함수를 실행