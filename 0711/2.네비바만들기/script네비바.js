
const btn=document.querySelector('.navbar-toggler');
const list=document.querySelector('.list-group');


//목록이 보이는지 안보이는지 여부를 확인하는 변수 생성
// let isOn=false

btn.addEventListener('click',()=>{

  //toggle목록창 보였다 안보였다 해주는 함수
  list.classList.toggle('show');

  // jquery방법
  // $('.list-gruoup').toggleClass('show');
});




  // list.classList.add('show');

  // //isOn이 true일때 실행되는 영역 true는 목록이 보이는 상태
  // if(isOn){
  //   list.classList.remove('show');
  //   isOn=!isOn;
  // //isOn이 false일때 실행되는 영역 false는 목록이 안보이는 상태
  // }else{
  //   list.classList.add('show');
  //   isOn=!isOn;
  // }

const liTags=document.querySelectorAll('.list-group-item');

for(let i=0; i<liTags.length; i++){
  liTags[i].addEventListener('click',()=>{
    alert('gggg');
  });
}





