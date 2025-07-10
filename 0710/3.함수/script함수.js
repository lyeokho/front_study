//// 함수 - 자바의 메서드와 똑같다

function showMsg(){
  let msg='hi';
  console.log('msg');
}

//함수호출
showMsg();
showMsg();
showMsg();

//msg라는 변수는 showMsg함수의 영역 밖이므로(지역변수) 사용불가
//console.log(msg);

let name='홍길동';

function showInfo(){
  name='고길동'
  let msg=`안녕하세요 ${name}님`;
  console.log(msg);
}

console.log(name); //지정한이름
showInfo(); //변경한 이름적용
console.log(name); //변경된 이름이 적용

// showInfo();


///매개변수와 리턴
function sum(x,y){
  console.log(x+y);
}
sum(3,4);


function sum2(x,y){
  return x+y;
}
let result=sum2(10,2);
console.log(result);

