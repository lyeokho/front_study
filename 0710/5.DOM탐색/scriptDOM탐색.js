
const box = document.getElementById('box')  //변수에 담을때는 실수를 없애기 위해 let대신 const를 사용한다.
box.style.background='red';
console.log(box);

//선택자를 이용해서 요소를 선택할 수 있음
const box2=document.querySelector('#box');
box2.style.color='white';


//querySelector는 선택자에 해당하는 요소 중 첫번째꺼 하나만 적용
// const bg=document.querySelector('.bg');
// bg.style.background= 'pink';

//선택자에 해당하는 모든 요소들을 가져옴는 방법
const bg=document.querySelectorAll('.bg');

// bg[0].style.background-='pink'
// bg[1].style.background-='pink'

// for(let i=0; i<bg.length; i++){  //지정한 클래스의 배경색 주기
//   bg[i].style.background='pink';
// }

for(let b of bg){
  b.style.background='blue';
}

const li=document.querySelectorAll('ul>li');
for(let l of li){
  l.innerHTML='ㄱㄱㄱㄱ';
}