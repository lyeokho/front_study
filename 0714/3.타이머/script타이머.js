

//// 정해진 시간이 흐른뒤 해당 코드가 작동 되도록 하는거
// setTimeout(콜백함수, 시간(ms));

// const time=document.querySelector('.time');  //5초에서 줄어들며 삭제 

// let t =5;  //시작하는 타임 변수

// const interval=setInterval(()=>{  
//   t--;
//   time.innerHTML=t;

//   console.log(t);
// }, 1000);


// setTimeout( ()=>{

//   document.querySelector('.alert').style.display='none'; //5초뒤 삭제
//   clearInterval(interval);  //5초뒤 삭제 후 카운트 기능을 멈추기 위함
// }, 5000);  //시간 5초뒤 작동된다


// //// 정해진 시간이 흐른 뒤 해당 코드가 반복하며 작동됨
// //setInterval(콜백함수, 시간(ms));

// setInterval( ()=>{
//   console.log('2초 마다 실행되는 코드');
// }, 2000);

// let timer;

// document.querySelector('.btn').addEventListener('click',()=>{
  
//   clearTimeout(timer)

//   timer=setTimeout( () => {
//     console.log('클릭 후 3초뒤 나타남')
// }, 3000);

// });


//////날짜 관련된 함수들
//현재 날짜와 시간
//const data=new Date();
// console.log(date);

//년도 추출하기
//console.log(date.getFullYear());
//월 추출하기
//console.log(date.getMonth());
//일 추출하기
//console.log(date.getDate());
//요일 추출하기
//console.log(date.getDay());
//시간 추출하기
//console.log(date.getHours());
//분 추출
//console.log(date.getMinutes());
//초 추출
//console.log(date.getFSeconds());



const clock=document.querySelector('.clock');

function insertTime(){
const date=new Date();
const hour=String(date.getHours()).padStart(2,0);
const minute=String(date.getMinutes()).padStart(2,0);
const second=String(date.getSeconds()).padStart(2,0);  //두자리 숫자로 보이게

clock.innerHTML=`${hour} : ${minute} : ${second}`;
}

insertTime();
setInterval(insertTime,1000);



