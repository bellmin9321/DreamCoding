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

// timer 라 하면 const timer 랑 겹치므로 안된다!!!! 위에 함수선언한거랑 다른이름으로
function play() {
  
  if(onclick = true) {
    start.innerHTML = '<div><i class="fas fa-pause"></i></div>'
  } else {
    onclick = false
  }
  
}




// start.addEventListener("click", function() {
//   start.innerHTML = '<i class="fas fa-pause"></i>'
//   setInterval(timer, 1000);
//   timer();

//   function decrementTime() {
//     const x1 = document.querySelector('time1');
//     const x2 = document.querySelector('time2');
//     x1.innerHTML = toMinSec(time);
//     x2.innerHTML = toMinSec(time);
//   }

//   function timer(t) {
//     const count = 60;
//     const min;
//     const sec;

//     min = Math.floor(count / 60);
//     sec = count - (min * 60);

//     if(min < 10) min = "0" + min;
//     if(sec < 10) sec = "0" + sec;

//     document.querySelector('.timer').innerHTML = min + ":" + sec;
  
//     if(count > 0 ) time--
//     else {
//       clearInterval(timer);
//       document.form.submit();
//     } 
//     return(min+":"+sec);
//   }
  
  // // 1자리 숫자인 경우 앞에 0을 붙여줌
  // function addzero(count) {
  //   if(count < 10) { count = "0" + count;}
  //   return count;
  // }
  


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